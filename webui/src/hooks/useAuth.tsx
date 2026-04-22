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
    saveTokens: (access: string, refresh: string) => void;
    logout: () => void;
    apiRequest: <T = any>(endpoint: string, method?: string, body?: unknown, options?: ApiRequestOptions) => Promise<T | ReadableStream<Uint8Array>>;
    loadUserInfo: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

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
    const MAX_REQUEST_SIZE = 1024 * 1024 * 20; // 20 MB

    const [accessToken, setAccessToken] = useState<string | null>(sessionStorage.getItem('access_token'));
    const [refreshToken, setRefreshToken] = useState<string | null>(sessionStorage.getItem('refresh_token'));
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [loadingUser, setLoadingUser] = useState(false);

    // Tokens management
    function saveTokens(access: string, refresh: string) {
        sessionStorage.setItem('access_token', access);
        sessionStorage.setItem('refresh_token', refresh);
        setAccessToken(access);
        setRefreshToken(refresh);
        setUserInfo(null); // Reset user info on new token
    }

    function logout() {
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('refresh_token');
        setAccessToken(null);
        setRefreshToken(null);
        setUserInfo(null);
    }

    const refreshAccessToken = useCallback(async () => {
        if (!refreshToken) {
            logout();
            throw new Error('No refresh token.');
        }

        const response = await fetch('/api/auth/refresh', {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + refreshToken, 'Content-Type': 'application/json' },
        });

        const data = await response.json();
        if (data.success) {
            sessionStorage.setItem('access_token', data.access_token);
            setAccessToken(data.access_token);
            return data.access_token;
        } else {
            logout();
            throw new Error('Refresh token invalid.');
        }
    }, [refreshToken]);

    const apiRequest = useCallback<AuthContextValue['apiRequest']>(async <T = any,>(endpoint: string, method = 'GET', body: unknown = null, { stream = false }: ApiRequestOptions = {}) => {
        let token = accessToken;

        async function doRequest(currentToken: string | null) {
            let content = body ? JSON.stringify(body) : null;
            if (content && content.length > MAX_REQUEST_SIZE) {
                throw new RequestSizeError(content.length, MAX_REQUEST_SIZE);
            }

            return fetch(endpoint, {
                method,
                headers: {
                    'Authorization': 'Bearer ' + currentToken,
                    'Content-Type': 'application/json'
                },
                body: content,
            });
        }

        let response = await doRequest(token);

        if (response.status === 401) {
            token = await refreshAccessToken();
            response = await doRequest(token);
        }

        if (!response.ok) {
            throw new HttpError(response.status);
        }

        if (stream) {
            if (!response.body) {
                throw new Error('No response body (streaming not supported)');
            }
            return response.body; // Return ReadableStream for caller to handle
        } else {
            return response.json() as Promise<T>; // Standard JSON handling
        }
    }, [accessToken, refreshAccessToken, MAX_REQUEST_SIZE]);


    // Load user info safely and only once if needed
    const loadUserInfo = useCallback(async () => {
        if (!accessToken)
            return;
        
        setLoadingUser(true);
        
        try {
            const response = await apiRequest<{ username: string; is_admin: boolean }>('/api/users/info') as { username: string; is_admin: boolean };

            setUserInfo({
                username: response.username,
                isAdmin: response.is_admin,
            });
        } catch (err) {
            console.error('Failed to load user info.', err);
            logout();
        } finally {
            setLoadingUser(false);
        }
    }, [accessToken, apiRequest]);

    // Auto-load user info on login
    useEffect(() => {
        if (accessToken && !userInfo) {
            loadUserInfo();
        }
    }, [accessToken, userInfo, loadUserInfo]);

    const value = useMemo<AuthContextValue>(() => ({
        isLoggedIn: !!accessToken,
        userInfo,
        loadingUser,
        saveTokens,
        logout,
        apiRequest,
        loadUserInfo,
    }), [accessToken, userInfo, loadingUser, apiRequest, loadUserInfo]);

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
