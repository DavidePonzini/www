import { Route, Routes, Link } from 'react-router-dom';

import Layout from '../../components/Layout';
import SectionBackground from '../../components/SectionBackground';
import Section from '../../components/Section';

import bgPrimi from '../../res/bg_time.jpg';
import bgSecondi from '../../res/bg_space.jpg';
import bgPanetteria from '../../res/bg_time.jpg';
import bgSalse from '../../res/bg_time2.jpg';
import bgSpezie from '../../res/spices.jpg';
import bgDolci from '../../res/bg_glass.jpg';
import bgBar from '../../res/eggsorcist.png';
import bgVarie from '../../res/database.jpg';

import * as Recipes from './recipes';

// List of all recipes
function RecipeList() {
    return (
        <>
            <SectionBackground img={bgPrimi}>
                <Section title="Primi">
                    <h2>Pasta</h2>
                    <ul>
                        {Recipes.primiPasta.map((recipe) => (
                            <li key={recipe.url}>
                                <Link to={recipe.url}>{recipe.title}</Link>
                            </li>
                        ))}
                    </ul>

                    <h2>Riso</h2>
                    <ul>
                        {Recipes.primiRiso.map((recipe) => (
                            <li key={recipe.url}>
                                <Link to={recipe.url}>{recipe.title}</Link>
                            </li>
                        ))}
                    </ul>
                    
                    <h2>Polenta</h2>
                    <ul>
                        {Recipes.primiPolenta.map((recipe) => (
                            <li key={recipe.url}>
                                <Link to={recipe.url}>{recipe.title}</Link>
                            </li>
                        ))}
                    </ul>
                    
                    <h2>Condimenti</h2>
                    <ul>
                        {Recipes.primiCondimenti.map((recipe) => (
                            <li key={recipe.url}>
                                <Link to={recipe.url}>{recipe.title}</Link>
                            </li>
                        ))}
                    </ul>
                </Section>
            </SectionBackground>

            <SectionBackground img={bgSecondi}>
                <Section title="Secondi">
                        <h2>Carne</h2>
                        <ul>
                            {Recipes.secondiCarne.map((recipe) => (
                                <li key={recipe.url}>
                                    <Link to={recipe.url}>{recipe.title}</Link>
                                </li>
                            ))}
                        </ul>

                        <h2>Pesce</h2>
                        <ul>
                            {Recipes.secondiPesce.map((recipe) => (
                                <li key={recipe.url}>
                                    <Link to={recipe.url}>{recipe.title}</Link>
                                </li>
                            ))}
                        </ul>

                        <h2>Uova</h2>
                        <ul>
                            {Recipes.secondiUova.map((recipe) => (
                                <li key={recipe.url}>
                                    <Link to={recipe.url}>{recipe.title}</Link>
                                </li>
                            ))}
                        </ul>
                        
                        <h2>Contorni</h2>
                        <ul>
                            {Recipes.secondiContorni.map((recipe) => (
                                <li key={recipe.url}>
                                    <Link to={recipe.url}>{recipe.title}</Link>
                                </li>
                            ))}
                        </ul>
                </Section>
            </SectionBackground>

            <SectionBackground img={bgPanetteria}>
                <Section title="Panetteria">
                    <ul>
                        {Recipes.panetteria.map((recipe) => (
                            <li key={recipe.url}>
                                <Link to={recipe.url}>{recipe.title}</Link>
                            </li>
                        ))}
                    </ul>
                </Section>
            </SectionBackground>

            <SectionBackground img={bgSalse}>
                <Section title="Salse">
                    <ul>
                        {Recipes.salse.map((recipe) => (
                            <li key={recipe.url}>
                                <Link to={recipe.url}>{recipe.title}</Link>
                            </li>
                        ))}
                    </ul>
                </Section>
            </SectionBackground>

            <SectionBackground img={bgSpezie}>
                <Section title="Spezie">
                    <ul>
                        {Recipes.spezie.map((recipe) => (
                            <li key={recipe.url}>
                                <Link to={recipe.url}>{recipe.title}</Link>
                            </li>
                        ))}
                    </ul>
                </Section>
            </SectionBackground>

            <SectionBackground img={bgDolci}>
                <Section title="Dolci">
                    <ul>
                        <li>Biscotti</li>
                        <ul>
                            {Recipes.dolciBiscotti.map((recipe) => (
                                <li key={recipe.url}>
                                    <Link to={recipe.url}>{recipe.title}</Link>
                                </li>
                            ))}
                        </ul>
                        <li>Torte</li>
                        <ul>
                            {Recipes.dolciTorte.map((recipe) => (
                                <li key={recipe.url}>
                                    <Link to={recipe.url}>{recipe.title}</Link>
                                </li>
                            ))}
                        </ul>
                        <li>Caramelle e Cioccolatini</li>
                        <ul>
                            {Recipes.dolciCaramelleCioccolatini.map((recipe) => (
                                <li key={recipe.url}>
                                    <Link to={recipe.url}>{recipe.title}</Link>
                                </li>
                            ))}
                        </ul>
                        <li>Creme</li>
                        <ul>
                            {Recipes.dolciCreme.map((recipe) => (
                                <li key={recipe.url}>
                                    <Link to={recipe.url}>{recipe.title}</Link>
                                </li>
                            ))}
                        </ul>
                        <li>Al cucchiaio</li>
                        <ul>
                            {Recipes.dolciCucchiaio.map((recipe) => (
                                <li key={recipe.url}>
                                    <Link to={recipe.url}>{recipe.title}</Link>
                                </li>
                            ))}
                        </ul>
                        <li>Altro</li>
                        <ul>
                            {Recipes.dolciAltro.map((recipe) => (
                                <li key={recipe.url}>
                                    <Link to={recipe.url}>{recipe.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </ul>
                </Section>
            </SectionBackground>

            <SectionBackground img={bgBar}>
                <Section title="Bar">
                    <ul>
                        <li>Cocktail</li>
                        <ul>
                            {Recipes.barCocktail.map((recipe) => (
                                <li key={recipe.url}>
                                    <Link to={recipe.url}>{recipe.title}</Link>
                                </li>
                            ))}
                        </ul>
                        <li>Sciroppi</li>
                        <ul>
                            {Recipes.barSciroppi.map((recipe) => (
                                <li key={recipe.url}>
                                    <Link to={recipe.url}>{recipe.title}</Link>
                                </li>
                            ))}
                        </ul>
                        <li>Liquori</li>
                        <ul>
                            {Recipes.barLiquori.map((recipe) => (
                                <li key={recipe.url}>
                                    <Link to={recipe.url}>{recipe.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </ul>
                </Section>
            </SectionBackground>

            <SectionBackground img={bgVarie}>
                <Section title="Varie">
                    <ul>
                        {Recipes.varie.map((recipe) => (
                            <li key={recipe.url}>
                                <Link to={recipe.url}>{recipe.title}</Link>
                            </li>
                        ))}
                    </ul>
                </Section>
            </SectionBackground>
        </>
    );
}

// Actual router, handles routing to individual recipes as well as the recipe list
function RecipesRouter() {
    return (
        <Layout>
            <Routes>
                <Route index element={<RecipeList />} />

                {Object.values(Recipes).flat().map((Recipe) => (
                    <Route key={Recipe.url} path={Recipe.url} element={<Recipe />} />
                ))}
            </Routes>
        </Layout>
    );
}

export default RecipesRouter;