import { defineRecipe } from './Util';

import {
    CookingTime,
    PreparationTime,
    RecipeLayout,
} from '../../../components/recipes';
import { Step, Parallel, ParallelBranch } from '../../../components/flow';

const TITLE = 'Pasta pomodoro fresco cotto';

function PastaPomodoroFrescoCotto() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={2}
            source='Abbate Maria Luisa'
            addedOn='~ 2019'
            times={<>
                <PreparationTime time='10 min' />
                <CookingTime time='40+' flame='medio-alta'>Pomodori</CookingTime>
                <PreparationTime time='10 min' />
                <CookingTime time='11 min' flame='alta'>Pasta</CookingTime>
            </>}
            ingredients={[
                { name: 'Pasta', quantity: 200, unit: 'g' },
                { name: 'Pomodori (maturi)', quantity: 300, unit: 'g' },
                { name: 'Dadi', quantity: 2 },
                { name: 'Aglio', quantity: 1, unit: 'spicchio' },
                { name: 'Basilico', quantity: 4, unit: 'foglie' },
                { name: 'Sale', quantity: 'q.b.' },
                { name: 'Olio', quantity: 'q.b.' },
            ]}
            instructions={<>
                <Step>Riempire una pentola d'acqua. Metterne più del normale. Aggiungere pomodori e dati. Coprire la pentola con coperchio.</Step>
                <Step>Quando bolle, abbassare il gas a medio e lasciare bollire per 30 - 120 minuti.</Step>
                <Step>Togliere i pomodori.</Step>
                
                <Parallel>
                    <ParallelBranch>
                        <Step>Passare i pomodori con passaverdure. Mettere la passata in un piatto.</Step>
                        <Step>Tritare aglio e basilico, aggiungere alla passata. Aggiungere anche sale ed olio e mescolare.</Step>
                    </ParallelBranch>

                    <ParallelBranch>
                        <Step>Mettere pasta in pentola (in cui rimane solo l'acqua).</Step>
                    </ParallelBranch>
                </Parallel>

                <Step>Quando la pasta è pronta (idealmente tutta l'acqua si è asciugata), unire al condimento.</Step>
            </>}
            suggestions={<>
            </>}
            notes=''
        />
    );
}

export default defineRecipe(PastaPomodoroFrescoCotto, TITLE);
