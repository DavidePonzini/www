import ItemCard from "../../components/ItemCard";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import SectionBackground from "../../components/SectionBackground";

import bgUtilities from '../../res/bg_webdev.jpg';
import cardPwdGen from '../../res/password.jpg';
import cardServer from '../../res/bg_server.png';

function Utilities() {
    return (
        <Layout>
            <div className="text-center">
                <SectionBackground img={bgUtilities}>
                    <Section title="Helpers">
                        <ItemCard title="Password Generator" href="pwd-gen" img={cardPwdGen}>
                            Random password generator
                        </ItemCard>
                    </Section>

                    <Section title="Web Development">
                        <ItemCard title="HTTP Code" href="/utils/php/http-code.php" img={cardServer} isExternal>
                            HTTP response code selector
                        </ItemCard>

                        <ItemCard title="PHP Request" href="/utils/php/request.php" img={cardServer} isExternal>
                            Display server-side request data
                        </ItemCard>

                        <ItemCard title="PHP Request (Simplified)" href="/utils/php/request-simple.php" img={cardServer} isExternal>
                            Display server-side HTTP request data (only $_GET, $_POST, $_FILES are shown)
                        </ItemCard>

                        <ItemCard title="PHP $_SERVER" href="/utils/php/server.php" img={cardServer} isExternal>
                            Display the content of <span style={{ fontFamily: 'monospace' }}>$_SERVER</span>
                        </ItemCard>
                    </Section>
                </SectionBackground>
            </div>
        </Layout>
    );
}

export default Utilities;