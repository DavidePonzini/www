import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

const AuthContext = createContext();

class RequestSizeError extends Error {
    constructor(size, maxSize) {
        super('Request size exceeds the maximum limit.');
        this.size = size;
        this.maxSize = maxSize;
    }
}


function AuthProvider({ children }) {
    const MAX_REQUEST_SIZE = 1024 * 1024 * 20; // 20 MB

    const [accessToken, setAccessToken] = useState(sessionStorage.getItem('access_token'));
    const [refreshToken, setRefreshToken] = useState(sessionStorage.getItem('refresh_token'));
    const [userInfo, setUserInfo] = useState(null);
    const [loadingUser, setLoadingUser] = useState(false);

    // Tokens management
    function saveTokens(access, refresh) {
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

    const apiRequest = useCallback(async (endpoint, method = 'GET', body = null, { stream = false } = {}) => {
        let token = accessToken;

        async function doRequest(currentToken) {
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
            const error = new Error(`HTTP error ${response.status}`);
            error.status = response.status;
            throw error;
        }

        if (stream) {
            if (!response.body) {
                throw new Error('No response body (streaming not supported)');
            }
            return response.body; // Return ReadableStream for caller to handle
        } else {
            return response.json(); // Standard JSON handling
        }
    }, [accessToken, refreshAccessToken, MAX_REQUEST_SIZE]);


    // Load user info safely and only once if needed
    const loadUserInfo = useCallback(async () => {
        if (!accessToken)
            return;
        
        setLoadingUser(true);
        
        try {
            const response = await apiRequest('/api/users/info');

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

    const value = useMemo(() => ({
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
    return useContext(AuthContext);
}

export { AuthProvider, useAuth, RequestSizeError };
export default useAuth;