import { defineRecipe } from './Util';

import {
    CookingTime,
    PreparationTime,
    RecipeLayout,
} from '../../../components/recipes';
import { Step, Parallel, ParallelBranch } from '../../../components/flow';

const TITLE = 'Polenta con salsiccia';

function PolentaSalsiccia() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={2}
            source='Davide Ponzini & Sofia Russo'
            addedOn='Agosto 2025'
            times={<>
                <PreparationTime time='15 min' />
                <CookingTime time='10 min' flame='alta' />
            </>}
            ingredients={[
                { name: 'Polenta', quantity: 'q.b.' },
                { name: 'Passata di pomodoro', quantity: 'q.b.' },
                { name: 'Cipolla', quantity: 'q.b.' },
                { name: 'Salsiccia', quantity: 'q.b.' },
                { name: 'Sale', quantity: 'q.b.' },
                { name: 'Pepe', quantity: 'q.b.' },
                { name: 'Rosmarino', quantity: 'q.b.' },
            ]}
            instructions={<>
                <Parallel>
                    <ParallelBranch>
                        <Step>Tagliare metà salsiccia a pezzetti di 1-2cm.</Step>
                        <Step>Rosolare separatamente i pezzetti di salsiccia.</Step>
                    </ParallelBranch>

                    <ParallelBranch>
                        <Step>Aprire la rimanente metà della salsiccia e tirarne fuori la carne.</Step>
                        <Step>Soffriggere salsiccia e cipolla.</Step>
                        <Step>Aggiungere passata di pomodoro, pepe, rosmarino. Regolare di sale.</Step>
                    </ParallelBranch>
                </Parallel>

                <Step>Quando è quasi pronto, aggiungere i pezzetti di salsiccia.</Step>
                <Step>Preparare la polenta.</Step>
                <Step>Unire al sugo.</Step>
            </>}
            notes='Preparata in roulotte a Lillaz, poco prima che ci fidanzassimo.'
        />
    );
}

export default defineRecipe(PolentaSalsiccia, TITLE);

