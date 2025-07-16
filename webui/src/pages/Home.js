import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Section from "../components/Section";
import SectionBackground from "../components/SectionBackground";
import ItemCard from "../components/ItemCard";

import bgGlass from '../res/bg_glass.jpg';
import bgWip from '../res/bg_wip.jpg';
import bgGPT4CT from '../res/problem-decomposition.png';
import bgUtilities from '../res/html.jpg';
import bgPortfolio from '../res/eggsorcist.png';
import bgLensql from '../res/database.jpg';

function Home() {
    return (
        <Layout banner={<Banner />}>

            <div className="text-center">
                <SectionBackground img={bgGlass}>
                    <Section title="Content">
                        <ItemCard title="Utilities" href="/utils" img={bgUtilities}>
                            Handy utilities for common tasks
                        </ItemCard>

                        <ItemCard title="Portfolio" href="/portfolio" img={bgPortfolio}>
                            Showcase of websites I developed
                        </ItemCard>
                    </Section>
                </SectionBackground>

                <SectionBackground img={bgWip}>
                    <Section title="Works in Progress">
                        <ItemCard title="LensQL" href="https://lensql.ponzidav.com" isExternal img={bgLensql}>
                            AI-powered tool for learning SQL
                        </ItemCard>

                        <ItemCard title="GPT4CT" href="/gpt4ct" isExternal img={bgGPT4CT}>
                            Tool for problem decomposition and learning computational thought
                        </ItemCard>
                    </Section>
                </SectionBackground>

            </div>
        </Layout>
    );
}

export default Home;