import { useEffect, useState, useCallback } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Table } from 'react-bootstrap';

import RedirectsAdd from './RedirectsAdd';
import RedirectsUpdate from './RedirectsUpdate';
import RedirectsDelete from './RedirectsDelete';

function Redirects() {
    const [redirects, setRedirects] = useState([]);
    const { apiRequest } = useAuth();

    const fetchRedirects = useCallback(async () => {
        const response = await apiRequest('/api/redirects', 'GET');

        if (response.success) {
            setRedirects(response.data);
        }
        else {
            alert(response.message || 'Failed to fetch redirects');
        }
    }, [apiRequest]);

    useEffect(() => { fetchRedirects() }, [apiRequest, fetchRedirects]);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Source</th>
                    <th>Destination</th>
                    <th style={{ width: '163px' }}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {redirects.map((redirect, index) => (
                    <tr key={index}>
                        <td style={{ fontFamily: 'monospace', alignContent: 'center', textAlign: 'start' }}>{redirect.source}</td>
                        <td style={{ fontFamily: 'monospace', alignContent: 'center', textAlign: 'start' }}>{redirect.target}</td>
                        <td style={{ alignContent: 'center' }}>
                            <RedirectsUpdate source={redirect.source} target={redirect.target} refresh={fetchRedirects} className='mx-1 mb-1' />
                            <RedirectsDelete source={redirect.source} refresh={fetchRedirects} className='mx-1 mb-1' />
                        </td>
                    </tr>
                ))}

                <tr>
                    <td colSpan='3'>
                        <RedirectsAdd refresh={fetchRedirects} />
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Redirects;