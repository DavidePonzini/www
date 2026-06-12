import { defineRecipe } from './Util';

import {
    CookingTime,
    RecipeLayout,
} from '../../../components/recipes';
import { Step, Parallel, ParallelBranch } from '../../../components/flow';

const TITLE = 'Pasta burro e salvia';

function PastaBurroSalvia() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={1}
            source='Abbate Maria Luisa'
            addedOn='~ 2019'
            times={<>
                <CookingTime time='5 min' flame='bassa'>Burro e salvia</CookingTime>
                <CookingTime time='15 min' flame='alta' />
            </>}
            ingredients={[
                { name: 'Pasta', quantity: 100, unit: 'g' },
                { name: 'Burro', quantity: 'q.b.' },
                { name: 'Salvia', quantity: 'q.b.' },
            ]}
            instructions={<>
                <Parallel>
                    <ParallelBranch>
                        <Step>Far cuocere la pasta.</Step>
                    </ParallelBranch>
                
                    <ParallelBranch>
                        <Step>Mettere burro e salvia in una padella.</Step>
                        <Step>Far sciogliere il burro e farlo assorbire dalla salvia.</Step>
                    </ParallelBranch>
                </Parallel>

                <Step>Scolare la pasta ed unire al condimento.</Step>
                <Step>Mescolare e rosolare lievemente.</Step>
            </>}
            suggestions={<>
            </>}
            notes=''
        />
    );
}

export default defineRecipe(PastaBurroSalvia, TITLE);

