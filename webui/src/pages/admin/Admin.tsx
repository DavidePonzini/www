import Layout from '../../components/Layout';
import SectionBackground from '../../components/SectionBackground';
import Section from '../../components/Section';
import AdminUsers from './AdminUsers';
import Redirects from './redirects/Redirects';

import bgAdmin from '../../res/password.jpg';

function Admin() {
    return (
        <Layout>
            <SectionBackground img={bgAdmin}>
                <Section title='Redirects'>
                    <Redirects />
                </Section>
                <Section title='Users'>
                    <AdminUsers />
                </Section>
            </SectionBackground>
        </Layout>
    );
}

export default Admin;
