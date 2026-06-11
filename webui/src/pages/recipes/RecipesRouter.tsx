import { Route, Routes, Link } from 'react-router-dom';

import Layout from '../../components/Layout';
import SectionBackground from '../../components/SectionBackground';

// import * as Recipes from './recipes';
import Recipes from './recipes';

// List of all recipes
function RecipeList() {
    return (
        <SectionBackground img={null}>
            {Object.keys(Recipes).map((category) => (
                <div key={category}>
                    <h1>{category}</h1>
                    <ul>
                        {Recipes[category].map((recipe) => (
                            <li key={recipe.url}>
                                <Link to={recipe.url}>{recipe.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </SectionBackground>
    );
}

// Actual router, handles routing to individual recipes as well as the recipe list
function RecipesRouter() {
    return (
        <Layout>
            <Routes>
                <Route index element={<RecipeList />} />

                {Object.keys(Recipes).map((category) => (
                    Recipes[category].map((Recipe) => (
                        <Route key={Recipe.url} path={Recipe.url} element={<Recipe />} />
                    ))
                ))}
            </Routes>
        </Layout>
    );
}

export default RecipesRouter;