import Layout from '../components/Layout';

function Privacy() {
    return (
        <Layout>
            <div className="container py-4">
                <h1 className="mb-3">Privacy Notice</h1>
                <p className="text-muted">Last updated: June 25, 2026</p>

                <h4 className="mt-4">Data collected</h4>
                <p>
                    If you create an account, the site stores the username you provide, a password hash, and related
                    account flags needed to operate protected features such as the admin area.
                </p>

                <h4 className="mt-4">How data is used</h4>
                <p>
                    Account data is used only to authenticate users, manage access control, and operate the website.
                    Public content pages can usually be viewed without creating an account.
                </p>

                <h4 className="mt-4">Sharing and disclosure</h4>
                <p>
                    Personal data is not sold. Data may be disclosed only when needed to operate the service, comply
                    with legal obligations, or protect the site from abuse.
                </p>

                <h4 className="mt-4">Retention and security</h4>
                <p>
                    Passwords are stored as hashes, not in plain text. Account information is retained as long as it is
                    needed to run the service or until it is removed by the site operator.
                </p>

                <h4 className="mt-4">Contact</h4>
                <p>
                    For privacy questions or deletion requests, contact
                    {' '}
                    <a href="mailto:davide.ponzini95@gmail.com">davide.ponzini95@gmail.com</a>.
                </p>
            </div>
        </Layout>
    );
}

export default Privacy;
