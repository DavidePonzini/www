import { Route, Routes, Link } from 'react-router-dom';

import Layout from '../../components/Layout';
import SectionBackground from '../../components/SectionBackground';

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
                <h1>Primi</h1>
                <ul>
                    <li>Pasta</li>
                    <ul>
                        {Recipes.primiPasta.map((recipe) => (
                            <li key={recipe.url}>
                                <Link to={recipe.url}>{recipe.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <li>Riso</li>
                    <ul>
                        {Recipes.primiRiso.map((recipe) => (
                            <li key={recipe.url}>
                                <Link to={recipe.url}>{recipe.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <li>Polenta</li>
                    <ul>
                        {Recipes.primiPolenta.map((recipe) => (
                            <li key={recipe.url}>
                                <Link to={recipe.url}>{recipe.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <li>Condimenti</li>
                    <ul>
                        {Recipes.primiCondimenti.map((recipe) => (
                            <li key={recipe.url}>
                                <Link to={recipe.url}>{recipe.title}</Link>
                            </li>
                        ))}
                    </ul>
                </ul>
            </SectionBackground>

            <SectionBackground img={bgSecondi}>
                <h1>Secondi</h1>
                <ul>
                    <li>Carne</li>
                    <ul>
                        {Recipes.secondiCarne.map((recipe) => (
                            <li key={recipe.url}>
                                <Link to={recipe.url}>{recipe.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <li>Pesce</li>
                    <ul>
                        {Recipes.secondiPesce.map((recipe) => (
                            <li key={recipe.url}>
                                <Link to={recipe.url}>{recipe.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <li>Uova</li>
                    <ul>
                        {Recipes.secondiUova.map((recipe) => (
                            <li key={recipe.url}>
                                <Link to={recipe.url}>{recipe.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <li>Contorni</li>
                    <ul>
                        {Recipes.secondiContorni.map((recipe) => (
                            <li key={recipe.url}>
                                <Link to={recipe.url}>{recipe.title}</Link>
                            </li>
                        ))}
                    </ul>
                </ul>
            </SectionBackground>

            <SectionBackground img={bgPanetteria}>
                <h1>Panetteria</h1>
                <ul>
                    {Recipes.panetteria.map((recipe) => (
                        <li key={recipe.url}>
                            <Link to={recipe.url}>{recipe.title}</Link>
                        </li>
                    ))}
                </ul>

            </SectionBackground>

            <SectionBackground img={bgSalse}>
                <h1>Salse</h1>
                <ul>
                    {Recipes.salse.map((recipe) => (
                        <li key={recipe.url}>
                            <Link to={recipe.url}>{recipe.title}</Link>
                        </li>
                    ))}
                </ul>

            </SectionBackground>

            <SectionBackground img={bgSpezie}>
                <h1>Spezie</h1>
                <ul>
                    {Recipes.spezie.map((recipe) => (
                        <li key={recipe.url}>
                            <Link to={recipe.url}>{recipe.title}</Link>
                        </li>
                    ))}
                </ul>

            </SectionBackground>

            <SectionBackground img={bgDolci}>
                <h1>Dolci</h1>
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

            </SectionBackground>

            <SectionBackground img={bgBar}>
                <h1>Bar</h1>
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

            </SectionBackground>

            <SectionBackground img={bgVarie}>
                <h1>Varie</h1>
                <ul>
                    {Recipes.varie.map((recipe) => (
                        <li key={recipe.url}>
                            <Link to={recipe.url}>{recipe.title}</Link>
                        </li>
                    ))}
                </ul>
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