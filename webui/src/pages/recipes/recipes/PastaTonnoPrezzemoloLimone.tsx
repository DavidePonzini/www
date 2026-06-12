import { defineRecipe } from './Util';

import {
    CookingTime,
    PreparationTime,
    RecipeLayout,
} from '../../../components/recipes';
import { Step, Parallel, ParallelBranch } from '../../../components/flow';

const TITLE = 'Pasta tonno, prezzemolo e limone';

function PastaTonnoPrezzemoloLimone() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={1}
            source='Abbate Maria Luisa'
            addedOn='~ 2019'
            times={<>
                <PreparationTime time='2 min' />
                <CookingTime time='15 min' flame='alta' />
            </>}
            ingredients={[
                { name: 'Pasta', quantity: 100, unit: 'g', category: 'Pasta' },
                { name: 'Dadi', quantity: 2 },
                { name: 'Tonno', quantity: 1, unit: 'scatola' },
                { name: 'Limone', quantity: 1 },
                { name: 'Prezzemolo', quantity: 'q.b.' },
            ]}
            instructions={<>
                <Parallel>
                    <ParallelBranch>
                        <Step>Far bollire l'acqua con i dadi.</Step>
                    </ParallelBranch>

                    <ParallelBranch>
                        <Step>Unire tonno (fatto a pezzi piccoli), succo di limone e prezzemolo in un piatto.</Step>
                    </ParallelBranch>
                </Parallel>

                <Step>Quando bolle, unire un mestolo di brodo al condimento.</Step>
                <Step>Versare la pasta e farla cuocere.</Step>
                <Step>Scolare la pasta ed unire al condimento.</Step>
            </>}
            suggestions={<>
            </>}
            notes=''
        />
    );
}

export default defineRecipe(PastaTonnoPrezzemoloLimone, TITLE);
