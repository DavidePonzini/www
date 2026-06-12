import { defineRecipe } from './Util';

import {
    CookingTime,
    Suggestion,
    PreparationTime,
    RecipeLayout,
} from '../../../components/recipes';
import { Step, Parallel, ParallelBranch } from '../../../components/flow';

const TITLE = 'Ragù';

function Ragu() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={10}
            servingsUnitSingular='barattolo da 500 ml'
            servingsUnitPlural='barattoli da 500 ml'
            source='Samuele Daga (modificata)'
            addedOn='~ 2016'
            times={<>
                <PreparationTime time='45 min' />
                <CookingTime time='3-4 h' flame='bassa' />
            </>}
            ingredients={[
                { name: 'Olio' },
                { name: 'Burro', quantity: 50, unit: 'g' },
                { name: 'Aglio', quantity: 15, unit: 'g' },
                { name: 'Cipolla', quantity: 100, unit: 'g' },
                { name: 'Carote', quantity: 300, unit: 'g' },
                { name: 'Sedano', quantity: 100, unit: 'g' },
                { name: 'Tritato bovino', quantity: 1, unit: 'kg' },
                { name: 'Pepe' },
                { name: 'Sale' },
                { name: 'Salsa di pomodoro', quantity: 4, unit: 'bottiglie' },
                { name: 'Vino rosso corposo', quantity: 2, unit: 'bicchieri' },
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
            </>}
            notes='Grazie Sammy per avermi fatto iniziare a cucinare!'
        />
    );
}

export default defineRecipe(Ragu, TITLE);