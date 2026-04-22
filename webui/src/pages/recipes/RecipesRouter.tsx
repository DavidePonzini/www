import { Route, Routes, Link } from 'react-router-dom';

import Layout from '../../components/Layout';

import Carbonara from './recipes/Carbonara';
import SectionBackground from '../../components/SectionBackground';

// List of all recipes
function RecipeList() {
    return (
        <SectionBackground img={null}>
            <h1>Primi</h1>
            <ul>
                <li><Link to='carbonara'>Carbonara</Link></li>
            </ul>

            <h1>Secondi</h1>
            <ul>
                {/* Future recipes go here */}
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

                <Route path='carbonara' element={<Carbonara />} />
            </Routes>
        </Layout>
    );
}

export default RecipesRouter;