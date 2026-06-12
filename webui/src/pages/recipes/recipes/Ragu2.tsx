import { defineRecipe } from './Util';

import {
    CookingTime,
    Suggestion,
    PreparationTime,
    RecipeLayout,
} from '../../../components/recipes';
import { Step, Parallel, ParallelBranch } from '../../../components/flow';

const TITLE = 'Ragù 2.0';

function Ragu2() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={12}
            servingsUnitSingular='barattolo da 500 ml'
            servingsUnitPlural='barattoli da 500 ml'
            source='Davide Ponzini'
            addedOn='Marzo 2023'
            times={<>
                <PreparationTime time='45 min' />
                <CookingTime time='3-4 h' flame='bassa' />
            </>}
            ingredients={[
                { name: 'Olio', quantity: 175, unit: 'g' },
                { name: 'Burro', quantity: 125, unit: 'g' },

                { name: 'Aglio', quantity: 40, unit: 'g', category: 'Verdure' },
                { name: 'Cipolla', quantity: 250, unit: 'g', category: 'Verdure' },
                { name: 'Carote', quantity: 750, unit: 'g', category: 'Verdure' },
                { name: 'Sedano', quantity: 250, unit: 'g', category: 'Verdure' },

                { name: 'Tritato bovino', quantity: 1000, unit: 'g', category: 'Carne' },
                { name: 'Tritato suino', quantity: 1000, unit: 'g', category: 'Carne' },
                { name: 'Mortadella tritata', quantity: 500, unit: 'g', category: 'Carne' },
                
                { name: 'Sale', category: 'Altro' },
                { name: 'Pepe nero', quantity: 5.5, unit: 'g', category: 'Altro' },
                { name: 'Salsa di pomodoro', quantity: 5, unit: 'bottiglie', category: 'Altro' },
                { name: 'Vino rosso corposo', quantity: 1.25, unit: 'bottiglie', category: 'Altro' },
            ]}
            instructions={<>
                <Parallel>
                    <ParallelBranch>
                        <Step>Sciogliere burro ed olio in pentola.</Step>
                    </ParallelBranch>

                    <ParallelBranch>
                        <Step>Tritare verdure.</Step>
                    </ParallelBranch>
                </Parallel>

                <Step>Cuocere verdure fino a che non diventano morbide (~ 10 min).</Step>
                <Step>Aggiungere tritato e pepe.</Step>
                <Step>Cuocere fino a che carne non cambia bene colore (~ 10 min).</Step>
                <Step>Aggiungere vino.</Step>
                <Step>Cuocere fino a che non si è un po' asciugato (~ 15 min).</Step>
                <Step>Aggiungere salsa.</Step>
                <Step>Cuocere per 3-4 ore.</Step>
            </>}
            suggestions={<>
                <Suggestion>Usare pentola con fondo antiaderente per non bruciare il fondo.</Suggestion>
                <Suggestion>Non aggiungere olio dopo la carne, brucia il fondo in ogni caso.</Suggestion>
                <Suggestion>La quantità di sale dipende dalla passata. Con passata Mutti, usare 50 g di sale.</Suggestion>
            </>}
            notes='Ricetta migliorata grazie ai proff. del Marco Polo.'
        />
    );
}

export default defineRecipe(Ragu2, TITLE);
