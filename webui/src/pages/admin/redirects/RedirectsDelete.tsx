import useAuth from '../../../hooks/useAuth';

function RedirectsDelete({ source, refresh, className }) {
    const { apiRequest } = useAuth();

    async function handleDelete() {
        const confirm = window.confirm(`Are you sure you want to delete the redirect from "${source}"?`);
        if (!confirm) {
            return;
        }

        const response = await apiRequest('/api/redirects', 'DELETE', {
            source: source,
        });

        if (response.success) {
            refresh();
        } else {
            alert(response.message || 'Failed to delete redirect');
        }
    }

    return (
        <button className={`btn btn-danger ${className}`} onClick={handleDelete}>
            Delete
        </button>
    );
}

export default RedirectsDelete;
