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
                    Recipes[category].map((recipe) => (
                        <Route key={recipe.url} path={recipe.url} element={<recipe.component />} />
                    ))
                ))}

                {/* <Route path='carbonara' element={<Recipes.Carbonara />} />
                <Route path='cookies' element={<Recipes.Cookies />} />
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
                <Route path='spezie-carne' element={<Recipes.SpezieCarne />} />
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
                <Route path='pomodori-pangrattato' element={<Recipes.PomodoriPangrattato />} />
                <Route path='sacher' element={<Recipes.Sacher />} /> */}
            </Routes>
        </Layout>
    );
}

export default RecipesRouter;