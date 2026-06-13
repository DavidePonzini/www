import { Route, Routes, Link } from 'react-router-dom';

import Layout from '../../components/Layout';
import SectionBackground from '../../components/SectionBackground';

// import * as Recipes from './recipes';
import * as Recipes from './recipes';

// List of all recipes
function RecipeList() {
    return (
        <SectionBackground img={null}>
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

            <h1>Panetteria</h1>
            <ul>
                {Recipes.panetteria.map((recipe) => (
                    <li key={recipe.url}>
                        <Link to={recipe.url}>{recipe.title}</Link>
                    </li>
                ))}
            </ul>

            <h1>Salse</h1>
            <ul>
                {Recipes.salse.map((recipe) => (
                    <li key={recipe.url}>
                        <Link to={recipe.url}>{recipe.title}</Link>
                    </li>
                ))}
            </ul>

            <h1>Spezie</h1>
            <ul>
                {Recipes.spezie.map((recipe) => (
                    <li key={recipe.url}>
                        <Link to={recipe.url}>{recipe.title}</Link>
                    </li>
                ))}
            </ul>

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

            <h1>Varie</h1>
            <ul>
                {Recipes.varie.map((recipe) => (
                    <li key={recipe.url}>
                        <Link to={recipe.url}>{recipe.title}</Link>
                    </li>
                ))}
            </ul>
        </SectionBackground>
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