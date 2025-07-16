import Layout from "../components/Layout";
import Section from "../components/Section";
import SectionBackground from "../components/SectionBackground";
import ItemCard from "../components/ItemCard";

import bgPortfolio from '../res/eggsorcist.png';


function Portfolio() {
    return (
        <Layout>
            <div className="text-center">
                <SectionBackground img={bgPortfolio}>
                    <Section title="Websites">
                        <ItemCard
                            title="Sito Brutto"
                            href="/portfolio/2016-sito-brutto"
                            isExternal
                            img="/portfolio/2016-sito-brutto/antonio.jpg"
                        >
                            Badly designed webpage, using only HTML and CSS (2016)
                        </ItemCard>

                        <ItemCard
                            title="Scenarios from the Future"
                            href="/portfolio/2018-scenarios-from-the-future"
                            isExternal
                            img="/portfolio/2018-scenarios-from-the-future/res/chart-linechart.png"
                        >
                            Visualization tools for complex data, developed as final project of Data Visualization course (2018)
                        </ItemCard>

                        <ItemCard
                            title="Chicken Chasers"
                            href="/portfolio/2019-chicken-chasers"
                            isExternal
                            img="/portfolio/2019-chicken-chasers/res/chicken_kicking.jpg"
                        >
                            Chicken-based website, developed as didactic exercise during my first year teaching Computer Science (2019)
                        </ItemCard>

                        <ItemCard
                            title="Danicucina Web Tutorial"
                            href="/portfolio/2022-web-tutorial"
                            isExternal
                            img="/portfolio/2022-web-tutorial/res/DSC_0653b-1024x1536.jpg"
                        >
                            Website based on recipes from
                            <a href="https://blog.giallozafferano.it/danicucina/" target="_blank" rel="noopener noreferrer">
                                Danicucina
                            </a>,
                            to teach website development (2022)
                        </ItemCard>
                    </Section>
                </SectionBackground>
            </div>
        </Layout>
    );
}

export default Portfolio;
