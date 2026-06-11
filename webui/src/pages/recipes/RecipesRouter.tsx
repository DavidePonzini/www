import { Route, Routes, Link } from 'react-router-dom';

import Layout from '../../components/Layout';
import SectionBackground from '../../components/SectionBackground';

import * as Recipes from './recipes';

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
                <li><Link to='torta-di-riso'>Torta di riso</Link></li>
                <li><Link to='tortellini-panna-prosciutto'>Tortellini panna e prosciutto</Link></li>
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
                <li><Link to='cipolle-caramellate'>Cipolle caramellate</Link></li>
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
                <li><Link to='caramello-mou'>Caramello Mou</Link></li>
                <li><Link to='cioccolatini-mou'>Cioccolatini al Mou</Link></li>
                <li><Link to='sacher'>SacherTorte</Link></li>
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

                <Route path='carbonara' element={<Recipes.Carbonara />} />
                <Route path='amatriciana' element={<Recipes.Amatriciana />} />
                <Route path='pure-di-patate' element={<Recipes.PureDiPatate />} />
                <Route path='sciroppo' element={<Recipes.Sciroppo />} />
                <Route path='sciroppo-cannella' element={<Recipes.SciroppoCannella />} />
                <Route path='crema-cocco' element={<Recipes.CremaCocco />} />
                <Route path='riso-jawad' element={<Recipes.RisoJawad />} />
                <Route path='riso-jawad-tritato' element={<Recipes.RisoJawadTritato />} />
                <Route path='riso-jawad-fagiolini' element={<Recipes.RisoJawadFagiolini />} />
                <Route path='riso-jawad-aglio' element={<Recipes.RisoJawadAglio />} />
                <Route path='besciamella' element={<Recipes.Besciamella />} />
                <Route path='salsa-tahina' element={<Recipes.SalsaTahina />} />
                <Route path='pollo-alla-ligure' element={<Recipes.PolloAllaLigure />} />
                <Route path='tiramisu' element={<Recipes.Tiramisu />} />
                <Route path='uova-sode' element={<Recipes.UovaSode />} />
                <Route path='torta-di-riso' element={<Recipes.TortaDiRiso />} />
                <Route path='brasato' element={<Recipes.Brasato />} />
                <Route path='salsa-barbeque' element={<Recipes.SalsaBarbeque />} />
                <Route path='polpette' element={<Recipes.Polpette />} />
                <Route path='pisto' element={<Recipes.Pisto />} />
                <Route path='salsiccia-verdure-al-forno' element={<Recipes.SalsicciaVerdureAlForno />} />
                <Route path='ragu' element={<Recipes.Ragu />} />
                <Route path='ragu2' element={<Recipes.Ragu2 />} />
                <Route path='spezie-carn' element={<Recipes.SpezieCarne />} />
                <Route path='spezie-patate' element={<Recipes.SpeziePatate />} />
                <Route path='risotto-zafferano' element={<Recipes.RisottoZafferano />} />
                <Route path='risotto-zucchine' element={<Recipes.RisottoZucchine />} />
                <Route path='pollo-caramellato' element={<Recipes.PolloCaramellato />} />
                <Route path='spezzatino' element={<Recipes.Spezzatino />} />
                <Route path='spiedini-tritato' element={<Recipes.SpiediniTritato />} />
                <Route path='salame-al-cioccolato' element={<Recipes.SalameAlCioccolato />} />
                <Route path='caramello-mou' element={<Recipes.CaramelloMou />} />
                <Route path='cioccolatini-mou' element={<Recipes.CioccolatiniMou />} />
                <Route path='tortellini-panna-prosciutto' element={<Recipes.TortelliniPannaProsciutto />} />
                <Route path='cipolle-caramellate' element={<Recipes.CipolleCaramellate />} />
                <Route path='sacher' element={<Recipes.Sacher />} />
            </Routes>
        </Layout>
    );
}

export default RecipesRouter;