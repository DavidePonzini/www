import { Route, Routes, Link } from 'react-router-dom';

import Layout from '../../components/Layout';
import SectionBackground from '../../components/SectionBackground';
import Section from '../../components/Section';

import bgSpezie from '../../res/spices.jpg';

import * as Recipes from './recipes';
import { RecipeComponent } from './recipes/Util';


function RecipeList({ title, recipes }: { title?: string; recipes: RecipeComponent[] }) {
    return (
        <>
            {title && <h2>{title}</h2>}

            <ul style={{
                columnCount: 'auto',
                columnWidth: '300px',
            }}>
                {recipes.map((recipe) => (
                    <li key={recipe.url}>
                        <Link to={recipe.url}>{recipe.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};


// List of all recipes
function RecipeIndex() {
    return (
        <>
            <SectionBackground img={bgSpezie}>
                <Section title="Primi">
                    <RecipeList title="Pasta" recipes={Recipes.primiPasta} />
                    <RecipeList title="Riso" recipes={Recipes.primiRiso} />
                    <RecipeList title="Polenta" recipes={Recipes.primiPolenta} />
                    <RecipeList title="Condimenti" recipes={Recipes.primiCondimenti} />
                </Section>

                <Section title="Secondi">
                    <RecipeList title="Carne" recipes={Recipes.secondiCarne} />
                    <RecipeList title="Pesce" recipes={Recipes.secondiPesce} />
                    <RecipeList title="Uova" recipes={Recipes.secondiUova} />
                    <RecipeList title="Contorni" recipes={Recipes.secondiContorni} />
                </Section>

                <Section title="Panetteria">
                    <RecipeList recipes={Recipes.panetteria} />
                </Section>

                <Section title="Salse">
                    <RecipeList recipes={Recipes.salse} />
                </Section>

                <Section title="Spezie">
                    <RecipeList recipes={Recipes.spezie} />
                </Section>

                <Section title="Dolci">
                    <RecipeList title="Biscotti" recipes={Recipes.dolciBiscotti} />
                    <RecipeList title="Torte" recipes={Recipes.dolciTorte} />
                    <RecipeList title="Caramelle e Cioccolatini" recipes={Recipes.dolciCaramelleCioccolatini} />
                    <RecipeList title="Creme" recipes={Recipes.dolciCreme} />
                    <RecipeList title="Al cucchiaio" recipes={Recipes.dolciCucchiaio} />
                    <RecipeList title="Altro" recipes={Recipes.dolciAltro} />
                </Section>

                <Section title="Bar">
                    <RecipeList title="Cocktail" recipes={Recipes.barCocktail} />
                    <RecipeList title="Sciroppi" recipes={Recipes.barSciroppi} />
                    <RecipeList title="Liquori" recipes={Recipes.barLiquori} />
                </Section>

                <Section title="Varie">
                    <RecipeList recipes={Recipes.varie} />
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
                <Route index element={<RecipeIndex />} />

                {Object.values(Recipes).flat().map((Recipe) => (
                    <Route key={Recipe.url} path={Recipe.url} element={<Recipe />} />
                ))}
            </Routes>
        </Layout>
    );
}

export default RecipesRouter;