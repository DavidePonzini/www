import Layout from '../components/Layout';

function Cookies() {
    return (
        <Layout>
            <div className="container py-4">
                <h1 className="mb-3">Cookie Notice</h1>
                <p className="text-muted">Last updated: June 25, 2026</p>

                <h4 className="mt-4">What this site uses cookies for</h4>
                <p>
                    This site uses a small number of cookies that are necessary to keep login sessions working for
                    registered users. They are not used for advertising or cross-site tracking.
                </p>

                <h4 className="mt-4">Authentication cookies</h4>
                <p>
                    When you log in, the server stores authentication tokens in HTTP-only cookies. Those cookies are
                    used only to identify your session, access protected pages, and refresh your login securely.
                </p>

                <h4 className="mt-4">How to manage cookies</h4>
                <p>
                    You can clear or block cookies in your browser settings. If you do, login-protected areas of the
                    site may stop working until you sign in again.
                </p>

                <h4 className="mt-4">Third-party cookies</h4>
                <p>
                    The main site does not intentionally set advertising cookies. External links and embedded third-party
                    content, if any, may have their own policies.
                </p>
            </div>
        </Layout>
    );
}

export default Cookies;
