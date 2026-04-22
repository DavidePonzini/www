import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

function DynamicRedirect() {
    const { url } = useParams();
    const { apiRequest } = useAuth();

    const [redirectTo, setRedirectTo] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchRedirect = async () => {
            const result = await apiRequest(`/api/redirects/${url}`, 'GET');

            console.log(result)

            if (result.success) {
                setMessage('');
                setRedirectTo(result.target);
            } else {
                setMessage(result.message || 'Redirect not found');
            }
        }

        fetchRedirect();
    }, [url, apiRequest]);

    useEffect(() => {
        if (redirectTo) {
            window.location.href = redirectTo;
        }
    }, [redirectTo]);

    if (message) {
        return <p>{message}</p>;
    }

    return (
        <h4>
            Redirecting to &nbsp;
            <a href={redirectTo}>{redirectTo}</a>
            ...
        </h4>
    );
}

export default DynamicRedirect;
