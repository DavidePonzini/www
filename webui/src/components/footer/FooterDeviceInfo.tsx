import { useEffect, useState } from 'react';

function FooterDeviceInfo() {
    const [ip, setIp] = useState(null);
    const [location, setLocation] = useState(null);
    const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        fetch('https://ipinfo.io/json')
            .then(res => res.json())
            .then(data => {
                setIp(data.ip);
                setLocation(`${data.city}, ${data.region} - ${data.country}`);
                setCoordinates(data.loc);
            })
            .catch(console.error);
    }, []);

    return (
        <ul className="monospace" style={{ listStyle: 'none', textIndent: '-2rem' }}>
            {ip && (
                <li>
                    IP Address: {ip}
                    <span
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title="Required by web server to send back response to your device"
                        style={{ cursor: 'pointer', textIndent: 0 }}
                    >
                        <i className="fa-solid fa-circle-question" style={{ color: 'darkgray', marginLeft: '0.5rem' }}></i>
                    </span>
                </li>
            )}
            {location && (
                <li>
                    Location: {location}
                    <span
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title="Derived from IP address"
                        style={{ cursor: 'pointer', textIndent: 0 }}
                    >
                        <i className="fa-solid fa-circle-question" style={{ color: 'darkgray', marginLeft: '0.5rem' }}></i>
                    </span>
                </li>
            )}
            {coordinates && (
                <li>
                    Coordinates:{' '}
                    <a href={`https://www.google.com/maps/@${coordinates}`} target="_blank" rel="noreferrer noopener">
                        {coordinates}
                    </a>
                    <span
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title="Derived from IP address"
                        style={{ cursor: 'pointer', textIndent: 0 }}
                    >
                        <i className="fa-solid fa-circle-question" style={{ color: 'darkgray', marginLeft: '0.5rem' }}></i>
                    </span>
                </li>
            )}
        </ul>
    );
}

export default FooterDeviceInfo;