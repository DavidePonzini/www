import type { PropsWithChildren } from 'react';
import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

type UserInfo = {
    username: string;
    isAdmin: boolean;
};

type ApiRequestOptions = {
    stream?: boolean;
};

type AuthContextValue = {
    isLoggedIn: boolean;
    userInfo: UserInfo | null;
    loadingUser: boolean;
    saveTokens: () => void;
    logout: () => void;
    apiRequest: <T = any>(endpoint: string, method?: string, body?: unknown, options?: ApiRequestOptions) => Promise<T | ReadableStream<Uint8Array>>;
    loadUserInfo: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);
const MAX_REQUEST_SIZE = 1024 * 1024 * 20; // 20 MB

class RequestSizeError extends Error {
    size: number;
    maxSize: number;

    constructor(size: number, maxSize: number) {
        super('Request size exceeds the maximum limit.');
        this.size = size;
        this.maxSize = maxSize;
    }
}

class HttpError extends Error {
    status: number;

    constructor(status: number) {
        super(`HTTP error ${status}`);
        this.status = status;
    }
}

function AuthProvider({ children }: PropsWithChildren) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [loadingUser, setLoadingUser] = useState(true);

    const saveTokens = useCallback(() => {
        setIsAuthenticated(true);
    }, []);

    const logout = useCallback(() => {
        fetch('/api/auth/logout', {
            method: 'POST',
            credentials: 'include',
        }).catch(() => {
            // Ignore logout network errors and still clear local state.
        });

        setIsAuthenticated(false);
        setUserInfo(null);
        setLoadingUser(false);
    }, []);

    const refreshAccessToken = useCallback(async () => {
        const response = await fetch('/api/auth/refresh', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });

        const data = await response.json();
        if (data.success) {
            setIsAuthenticated(true);
            return;
        }

        logout();
        throw new Error('Refresh token invalid.');
    }, [logout]);

    const apiRequest = useCallback<AuthContextValue['apiRequest']>(async <T = any,>(
        endpoint: string,
        method = 'GET',
        body: unknown = null,
        { stream = false }: ApiRequestOptions = {},
    ) => {
        async function doRequest() {
            const content = body ? JSON.stringify(body) : null;
            if (content && content.length > MAX_REQUEST_SIZE) {
                throw new RequestSizeError(content.length, MAX_REQUEST_SIZE);
            }

            return fetch(endpoint, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: content,
            });
        }

        let response = await doRequest();

        if (response.status === 401) {
            await refreshAccessToken();
            response = await doRequest();
        }

        if (!response.ok) {
            throw new HttpError(response.status);
        }

        if (stream) {
            if (!response.body) {
                throw new Error('No response body (streaming not supported)');
            }
            return response.body;
        }

        return response.json() as Promise<T>;
    }, [refreshAccessToken]);

    const loadUserInfo = useCallback(async () => {
        setLoadingUser(true);

        try {
            const response = await apiRequest<{ username: string; is_admin: boolean }>('/api/users/info') as {
                username: string;
                is_admin: boolean;
            };

            setUserInfo({
                username: response.username,
                isAdmin: response.is_admin,
            });
            setIsAuthenticated(true);
        } catch {
            setIsAuthenticated(false);
            setUserInfo(null);
        } finally {
            setLoadingUser(false);
        }
    }, [apiRequest]);

    useEffect(() => {
        if (isAuthenticated && userInfo) {
            return;
        }

        loadUserInfo();
    }, [isAuthenticated, userInfo, loadUserInfo]);

    const value = useMemo<AuthContextValue>(() => ({
        isLoggedIn: isAuthenticated,
        userInfo,
        loadingUser,
        saveTokens,
        logout,
        apiRequest,
        loadUserInfo,
    }), [isAuthenticated, userInfo, loadingUser, saveTokens, logout, apiRequest, loadUserInfo]);

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used inside <AuthProvider>.');
    }

    return context;
}

export { AuthProvider, useAuth, RequestSizeError };
export default useAuth;
