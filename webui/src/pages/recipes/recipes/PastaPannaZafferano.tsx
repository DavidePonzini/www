import { defineRecipe } from './Util';

import {
    CookingTime,
    PreparationTime,
    RecipeLayout,
} from '../../../components/recipes';
import { Step, Parallel, ParallelBranch } from '../../../components/flow';

const TITLE = 'Pasta panna e zafferano';

function PastaPannaZafferano() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={1}
            source='Abbate Maria Luisa'
            addedOn='~ 2019'
            times={<>
                <PreparationTime time='5 min' />
                <CookingTime time='11 min' flame='alta'>Pasta</CookingTime>
                <CookingTime time='5 min' flame='bassa'>Condimento</CookingTime>
            </>}
            ingredients={[
                { name: 'Pasta', quantity: 100, unit: 'g' },
                { name: 'Cipolla', quantity: 15, unit: 'g' },
                { name: 'Panna da cucina', quantity: 125, unit: 'ml' },
                { name: 'Olio', quantity: 'q.b.' },
                { name: 'Noce moscata', quantity: 'q.b.' },
            ]}
            instructions={<>
                <Parallel>
                    <ParallelBranch>
                        <Step>Soffriggere cipolla con olio.</Step>
                        <Step>Aggiungere panna e zafferano. Opzionalmente aggiungere anche la noce moscata (non tanta).</Step>
                        <Step>Far cuocere a fiamma bassa per 1-2 minuti.</Step>
                    </ParallelBranch>

                    <ParallelBranch>
                        <Step>Cuocere la pasta normalmente.</Step>
                    </ParallelBranch>
                </Parallel>

                <Step>Unire la pasta al condimento, opzionalmente aggiungendo un goccio di acqua di cottura.</Step>
            </>}
            suggestions={<>
            </>}
            notes=''
        />
    );
}

export default defineRecipe(PastaPannaZafferano, TITLE);
