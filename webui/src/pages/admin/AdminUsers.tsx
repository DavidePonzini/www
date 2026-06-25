import { useCallback, useEffect, useState } from 'react';
import { Alert, Form, Table } from 'react-bootstrap';

import useAuth from '../../hooks/useAuth';

type AdminUser = {
    username: string;
    is_admin: boolean;
};

type ApiResponse = {
    success: boolean;
    message?: string;
};

function AdminUsers() {
    const { apiRequest, userInfo } = useAuth();
    const [users, setUsers] = useState<AdminUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [pendingUsername, setPendingUsername] = useState<string | null>(null);
    const [message, setMessage] = useState<{ type: 'success' | 'danger'; text: string } | null>(null);

    const fetchUsers = useCallback(async () => {
        setLoading(true);

        try {
            const response = await apiRequest<{ success: boolean; data: AdminUser[]; message?: string }>('/api/users') as {
                success: boolean;
                data: AdminUser[];
                message?: string;
            };

            if (!response.success) {
                setMessage({ type: 'danger', text: response.message || 'Failed to load users.' });
                return;
            }

            setUsers(response.data);
        } catch {
            setMessage({ type: 'danger', text: 'Failed to load users.' });
        } finally {
            setLoading(false);
        }
    }, [apiRequest]);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const handleToggleAdmin = useCallback(async (username: string, isAdmin: boolean) => {
        setPendingUsername(username);
        setMessage(null);

        try {
            const response = await apiRequest<ApiResponse>(
                '/api/users/admin-status',
                'POST',
                { username, is_admin: !isAdmin },
            ) as ApiResponse;

            if (!response.success) {
                setMessage({ type: 'danger', text: response.message || 'Failed to update admin status.' });
                return;
            }

            setUsers((currentUsers) => currentUsers.map((user) => (
                user.username === username
                    ? { ...user, is_admin: !isAdmin }
                    : user
            )));
            setMessage({
                type: 'success',
                text: `${username} is ${isAdmin ? 'no longer' : 'now'} an admin.`,
            });
        } catch {
            setMessage({ type: 'danger', text: 'Failed to update admin status.' });
        } finally {
            setPendingUsername(null);
        }
    }, [apiRequest]);

    return (
        <>
            {message && (
                <Alert variant={message.type}>
                    {message.text}
                </Alert>
            )}

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th style={{ width: '180px' }}>Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan={2}>Loading users...</td>
                        </tr>
                    ) : users.length === 0 ? (
                        <tr>
                            <td colSpan={2}>No users found.</td>
                        </tr>
                    ) : users.map((user) => {
                        const isSelf = user.username === userInfo?.username;
                        const isPending = pendingUsername === user.username;

                        return (
                            <tr key={user.username}>
                                <td style={{ fontFamily: 'monospace', alignContent: 'center', textAlign: 'start' }}>
                                    {user.username}
                                </td>
                                <td style={{ alignContent: 'center' }}>
                                    <Form.Check
                                        type='checkbox'
                                        checked={user.is_admin}
                                        disabled={isSelf || isPending}
                                        label={isPending ? 'Saving...' : 'Admin'}
                                        onChange={() => { handleToggleAdmin(user.username, user.is_admin); }}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
}

export default AdminUsers;
