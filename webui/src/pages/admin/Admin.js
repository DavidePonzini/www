import Layout from '../../components/Layout';
import SectionBackground from '../../components/SectionBackground';
import Section from '../../components/Section';
import Redirects from './redirects/Redirects';

import bgAdmin from '../../res/password.jpg';

function Admin() {
    return (
        <Layout>
            <SectionBackground img={bgAdmin}>
                <Section title='Redirects'>
                    <Redirects />
                </Section>
            </SectionBackground>
        </Layout>
    );
}

export default Admin;