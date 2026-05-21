import { Route, Routes, Link } from 'react-router-dom';

import Layout from '../../components/Layout';

import SectionBackground from '../../components/SectionBackground';
import Carbonara from './recipes/Carbonara';
import Amatriciana from './recipes/Amatriciana';
import PureDiPatate from './recipes/PureDiPatate';
import Sciroppo from './recipes/Sciroppo';
import SciroppoCannella from './recipes/SciroppoCannella';
import CremaCocco from './recipes/CremaCocco';
import RisoJawad from './recipes/RisoJawad';
import RisoJawadFagiolini from './recipes/RisoJawadFagiolini';
import RisoJawadAglio from './recipes/RisoJawadAglio';
import Besciamella from './recipes/Besciamella';
import SalsaTahina from './recipes/SalsaTahina';
import PolloAllaLigure from './recipes/PolloAllaLigure';

// List of all recipes
function RecipeList() {
    return (
        <SectionBackground img={null}>
            <h1>Primi</h1>
            <ul>
                <li><Link to='carbonara'>Carbonara</Link></li>
                <li><Link to='amatriciana'>Amatriciana</Link></li>
                <li><Link to='riso-jawad'>Riso con pollo - Jawad</Link></li>
                <li><Link to='riso-jawad-aglio'>Riso con pollo e aglio - Jawad</Link></li>
                <li><Link to='riso-jawad-fagiolini'>Riso con pollo e fagiolini - Jawad</Link></li>
            </ul>

            <h1>Secondi</h1>
            <ul>
                <li><Link to='pollo-alla-ligure'>Pollo alla ligure</Link></li>
            </ul>

            <h1>Contorni</h1>
            <ul>
                <li><Link to='pure-di-patate'>Purè di patate</Link></li>
            </ul>

            <h1>Salse</h1>
            <ul>
                <li><Link to='besciamella'>Besciamella</Link></li>
                <li><Link to='salsa-tahina'>Salsa Tahina</Link></li>
            </ul>

            <h1>Dolci</h1>
            <ul>

            </ul>

            <h1>Bevande</h1>
            <ul>
                <li><Link to='sciroppo'>Sciroppo 62%</Link></li>
                <li><Link to='sciroppo-cannella'>Sciroppo alla cannella</Link></li>
                <li><Link to='crema-cocco'>Crema di cocco</Link></li>
            </ul>

            <h1>Altro</h1>
            <ul>

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
                <Route path='sciroppo' element={<Sciroppo />} />
                <Route path='sciroppo-cannella' element={<SciroppoCannella />} />
                <Route path='crema-cocco' element={<CremaCocco />} />
                <Route path='riso-jawad' element={<RisoJawad />} />
                <Route path='riso-jawad-fagiolini' element={<RisoJawadFagiolini />} />
                <Route path='riso-jawad-aglio' element={<RisoJawadAglio />} />
                <Route path='besciamella' element={<Besciamella />} />
                <Route path='salsa-tahina' element={<SalsaTahina />} />
                <Route path='pollo-alla-ligure' element={<PolloAllaLigure />} />
            </Routes>
        </Layout>
    );
}

export default RecipesRouter;