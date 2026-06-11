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
import Tiramisu from './recipes/Tiramisu';
import UovaSode from './recipes/UovaSode';
import Brasato from './recipes/Brasato';
import SalsaBarbeque from './recipes/SalsaBarbeque';
import Polpette from './recipes/Polpette';
import Pisto from './recipes/Pisto';
import SalsicciaVerdureAlForno from './recipes/SalsicciaVerdureAlForno';
import Ragu from './recipes/Ragu';
import Ragu2 from './recipes/Ragu2';
import { SpezieCarne, SpeziePatate } from './recipes/Spezie';
import RisoJawadTritato from './recipes/RisoJawadTritato';
import RisottoZafferano from './recipes/RisottoZafferano';
import RisottoZucchine from './recipes/RisottoZucchine';
import PolloCaramellato from './recipes/PolloCaramellato';
import Spezzatino from './recipes/Spezzatino';
import SpiediniTritato from './recipes/SpiediniTritato';
import SalameAlCioccolato from './recipes/SalameAlCioccolato';

// List of all recipes
function RecipeList() {
    return (
        <SectionBackground img={null}>
            <h1>Primi</h1>
            <ul>
                <li><Link to='amatriciana'>Amatriciana</Link></li>
                <li><Link to='carbonara'>Carbonara</Link></li>
                <li><Link to='riso-jawad'>Riso con pollo - Jawad</Link></li>
                <li><Link to='riso-jawad-aglio'>Riso con pollo e aglio - Jawad</Link></li>
                <li><Link to='riso-jawad-fagiolini'>Riso con pollo e fagiolini - Jawad</Link></li>
                <li><Link to='riso-jawad-tritato'>Riso con tritato - Jawad</Link></li>
                <li><Link to='risotto-zafferano'>Risotto allo zafferano</Link></li>
                <li><Link to='risotto-zucchine'>Risotto alle zucchine</Link></li>
            </ul>

            <h1>Secondi</h1>
            <ul>
                <li><Link to='brasato'>Brasato</Link></li>
                <li><Link to='pollo-alla-ligure'>Pollo alla ligure</Link></li>
                <li><Link to='pollo-caramellato'>Pollo caramellato</Link></li>
                <li><Link to='salsiccia-verdure-al-forno'>Salsiccia e verdure al forno</Link></li>
                <li><Link to='spezzatino'>Spezzatino</Link></li>
            </ul>

            <h1>Contorni</h1>
            <ul>
                <li><Link to='polpette'>Polpette</Link></li>
                <li><Link to='pure-di-patate'>Purè di patate</Link></li>
                <li><Link to='uova-sode'>Uova sode</Link></li>
                <li><Link to='spiedini-tritato'>Spiedini di tritato</Link></li>
            </ul>

            <h1>Salse</h1>
            <ul>
                <li><Link to='besciamella'>Besciamella</Link></li>
                <li><Link to='ragu'>Ragù</Link></li>
                <li><Link to='ragu2'>Ragù 2.0</Link></li>
                <li><Link to='salsa-barbeque'>Salsa Barbeque</Link></li>
                <li><Link to='salsa-tahina'>Salsa Tahina</Link></li>
            </ul>

            <h1>Dolci</h1>
            <ul>
                <li><Link to='salame-al-cioccolato'>Salame al cioccolato</Link></li>
                <li><Link to='tiramisu'>Tiramisù</Link></li>
            </ul>

            <h1>Bevande</h1>
            <ul>
                <li><Link to='crema-cocco'>Crema di cocco</Link></li>
                <li><Link to='sciroppo'>Sciroppo 62%</Link></li>
                <li><Link to='sciroppo-cannella'>Sciroppo alla cannella</Link></li>
            </ul>

            <h1>Altro</h1>
            <ul>
                <li><Link to='pisto'>Pisto</Link></li>
                <li><Link to='spezie-carn'>Spezie per carni</Link></li>
                <li><Link to='spezie-patate'>Spezie per patate</Link></li>
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
                <Route path='riso-jawad-tritato' element={<RisoJawadTritato />} />
                <Route path='riso-jawad-fagiolini' element={<RisoJawadFagiolini />} />
                <Route path='riso-jawad-aglio' element={<RisoJawadAglio />} />
                <Route path='besciamella' element={<Besciamella />} />
                <Route path='salsa-tahina' element={<SalsaTahina />} />
                <Route path='pollo-alla-ligure' element={<PolloAllaLigure />} />
                <Route path='tiramisu' element={<Tiramisu />} />
                <Route path='uova-sode' element={<UovaSode />} />
                <Route path='brasato' element={<Brasato />} />
                <Route path='salsa-barbeque' element={<SalsaBarbeque />} />
                <Route path='polpette' element={<Polpette />} />
                <Route path='pisto' element={<Pisto />} />
                <Route path='salsiccia-verdure-al-forno' element={<SalsicciaVerdureAlForno />} />
                <Route path='ragu' element={<Ragu />} />
                <Route path='ragu2' element={<Ragu2 />} />
                <Route path='spezie-carn' element={<SpezieCarne />} />
                <Route path='spezie-patate' element={<SpeziePatate />} />
                <Route path='risotto-zafferano' element={<RisottoZafferano />} />
                <Route path='risotto-zucchine' element={<RisottoZucchine />} />
                <Route path='pollo-caramellato' element={<PolloCaramellato />} />
                <Route path='spezzatino' element={<Spezzatino />} />
                <Route path='spiedini-tritato' element={<SpiediniTritato />} />
                <Route path='salame-al-cioccolato' element={<SalameAlCioccolato />} />
            </Routes>
        </Layout>
    );
}

export default RecipesRouter;