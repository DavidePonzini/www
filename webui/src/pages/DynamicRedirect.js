import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function DynamicRedirect() {
    const { url } = useParams();
    const [redirectTo, setRedirectTo] = useState(null);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        // Simulate fetching from DB — replace this with actual logic
        const fakeDB = {
            'github': 'https://github.com',
            'site': 'https://ponzidav.com',
        };

        const result = fakeDB[url];

        if (result) {
            setRedirectTo(result);
        } else {
            setNotFound(true);
        }
    }, [url]);

    useEffect(() => {
        if (redirectTo) {
            window.location.href = redirectTo;
        }
    }, [redirectTo]);

    if (notFound) {
        return <p>Redirect not found</p>;
    }

    return <p>Redirecting...</p>;
}

export default DynamicRedirect;
