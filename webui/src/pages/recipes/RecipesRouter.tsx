import { Route, Routes, Link } from 'react-router-dom';

import Layout from '../../components/Layout';

import SectionBackground from '../../components/SectionBackground';
import Carbonara from './recipes/Carbonara';
import Amatriciana from './recipes/Amatriciana';
import PureDiPatate from './recipes/PureDiPatate';

// List of all recipes
function RecipeList() {
    return (
        <SectionBackground img={null}>
            <h1>Primi</h1>
            <ul>
                <li><Link to='carbonara'>Carbonara</Link></li>
                <li><Link to='amatriciana'>Amatriciana</Link></li>
            </ul>

            <h1>Secondi</h1>
            <ul>
                <li><Link to='pure-di-patate'>Purè di patate</Link></li>
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
                <Route path='amatriciana' element={<Amatriciana />} />
                <Route path='pure-di-patate' element={<PureDiPatate />} />
            </Routes>
        </Layout>
    );
}

export default RecipesRouter;