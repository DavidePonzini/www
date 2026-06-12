import { defineRecipe } from './Util';

import {
    CookingTime,
    PreparationTime,
    RecipeLayout,
} from '../../../components/recipes';
import { Step, Parallel, ParallelBranch } from '../../../components/flow';

const TITLE = 'Pasta aglio, olio e peperoncino';

function PastaAglioOlioPeperoncino() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={1}
            source='Davide Ponzini'
            addedOn='~ 2019'
            times={<>
                <PreparationTime time='2 min' />
                <CookingTime time='11 min' flame='alta' />
            </>}
            ingredients={[
                { name: 'Spaghetti', quantity: 100, unit: 'g' },
                { name: 'Aglio', quantity: 2, unit: 'spicchi' },
                { name: 'Olio', quantity: 'q.b.' },
                { name: 'Peperoncino', quantity: 'q.b.' },
            ]}
            instructions={<>
                <Parallel>
                    <ParallelBranch>
                        <Step>Mettere in una padella olio e aglio.</Step>
                        <Step>Far rosolare. Infine aggiungere peperoncino.</Step>
                    </ParallelBranch>
                
                    <ParallelBranch>
                        <Step>Cuocere pasta normalmente.</Step>
                    </ParallelBranch>
                </Parallel>

                <Step>Unire e mescolare.</Step>
                <Step>(Opzionale) Aggiungere del formaggio grattugiato; non mescolare.</Step>
            </>}
        />
    );
}

export default defineRecipe(PastaAglioOlioPeperoncino, TITLE);
