import './Footer.css';

import FooterSocial from './FooterSocial';
import FooterDonations from './FooterDonations';
// import FooterDeviceInfo from './FooterDeviceInfo';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer style={{
            width: '100%',
            backgroundColor: 'var(--bg-color)',
            padding: '12px',
            position: 'sticky',
            zIndex: 51,
        }}>
            <div className="container-fluid">
                <div className="center" style={{ fontFamily: 'monospace' }}>
                    Developed by Davide Ponzini.
                </div>

                <div className="center">
                    © {year} ponzidav.com · <a href="mailto:davide.ponzini95@gmail.com">Contact</a> · <a href="/cookies">Cookies</a> · <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a>
                </div>

                <div className="center">
                    <FooterSocial />
                </div>

                <div className="center">
                    <FooterDonations />
                </div>

                {/* <hr />
                <div>
                    <FooterDeviceInfo />
                </div> */}
            </div>
        </footer>
    );
}

export default Footer;
