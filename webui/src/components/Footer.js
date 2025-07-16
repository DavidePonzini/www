import './Footer.css';
import './FooterSocial.css';

function FooterSocial() {
    return (
        <>
            <a href="https://ponzidav.com" target="_blank" rel="noreferrer noopener" className="bi bi-globe social social-website">
                <span className="visually-hidden">Website</span>
            </a>
            <a href="https://github.com/DavidePonzini" target="_blank" rel="noreferrer noopener" className="bi bi-github social social-github">
                <span className="visually-hidden">GitHub</span>
            </a>
            <a href="mailto:davide.ponzini@edu.unige.it" target="_blank" rel="noreferrer noopener" className="bi bi-envelope-at social social-email">
                <span className="visually-hidden">Email</span>
            </a>
        </>
    );
}

function FooterDonations() {
    return (
        <a className="social-donation" target="_blank" rel='noreferrer noopener' href="https://www.paypal.me/davideponzini95">
            <i className="fa-solid fa-cocktail"></i>
            Buy me a drink!
            <i className="fa-solid fa-cocktail"></i>
        </a>
    );
}

function FooterDeviceInfo() {
    return (
        <ul id="footer-device-info" className="monospace">
            <li id="footer-ip" className="hidden">
                IP Address:
                <span id="footer-ip-text"></span>
                <span data-bs-toggle="tooltip" data-bs-placement="right" title="Required by web server to send back response to your device">
                    <i className="fa-solid fa-circle-question"></i>
                </span>
            </li>
            <li id="footer-location" className="hidden">
                Location:
                <span id="footer-location-text"></span>
                <span data-bs-toggle="tooltip" data-bs-placement="right" title="Derived from IP address">
                    <i className="fa-solid fa-circle-question"></i>
                </span>
            </li>
            <li id="footer-loc" className="hidden">
                Coordinates:
                <span id="footer-loc-text"></span>
                <span data-bs-toggle="tooltip" data-bs-placement="right" title="Derived from IP address">
                    <i className="fa-solid fa-circle-question"></i>
                </span>
            </li>
        </ul>
    );
}

function Footer() {
    return (

        <div className="footer" style={{
            width: '100%',
            backgroundColor: 'var(--bg-color)',
            padding: '12px',
            position: 'sticky',
            zIndex: 51,
        }}>
            <div className="container-fluid">
                <div className="center monospace">
                    Developed by Davide Ponzini.
                </div>

                <div className="center">
                    <FooterSocial />
                </div>

                <div className="center">
                    <FooterDonations />
                </div>

                <hr />
                <div>
                    <FooterDeviceInfo />
                </div>
            </div>
        </div>
    );
}

export default Footer;