import Layout from '../components/Layout';

function Terms() {
    return (
        <Layout>
            <div className="container py-4">
                <h1 className="mb-3">Terms of Use</h1>
                <p className="text-muted">Last updated: June 25, 2026</p>

                <h4 className="mt-4">Acceptable use</h4>
                <p>
                    You may use this site for its intended purposes, including browsing public content and accessing
                    account-restricted features that have been made available to you. Do not use the site to attack,
                    disrupt, scrape abusively, or bypass access controls.
                </p>

                <h4 className="mt-4">Accounts</h4>
                <p>
                    You are responsible for keeping your login credentials confidential and for activity performed
                    through your account. Access may be suspended if the account is used abusively or unlawfully.
                </p>

                <h4 className="mt-4">Content and availability</h4>
                <p>
                    Site content is provided on an as-is basis. Features may change, move, or be removed without notice,
                    and uninterrupted availability is not guaranteed.
                </p>

                <h4 className="mt-4">Liability</h4>
                <p>
                    To the extent permitted by law, the operator is not liable for indirect damages, data loss, or
                    service interruptions arising from use of the site.
                </p>

                <h4 className="mt-4">Contact</h4>
                <p>
                    Questions about these terms can be sent to
                    {' '}
                    <a href="mailto:davide.ponzini95@gmail.com">davide.ponzini95@gmail.com</a>.
                </p>
            </div>
        </Layout>
    );
}

export default Terms;
