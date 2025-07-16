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

export default FooterSocial;
