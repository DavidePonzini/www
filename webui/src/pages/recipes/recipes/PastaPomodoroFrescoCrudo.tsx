import { defineRecipe } from './Util';

import {
    CookingTime,
    PreparationTime,
    RecipeLayout,
} from '../../../components/recipes';
import { Step, Parallel, ParallelBranch } from '../../../components/flow';

const TITLE = 'Pasta pomodoro fresco crudo';

function PastaPomodoroFrescoCrudo() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={2}
            source='Abbate Maria Luisa'
            addedOn='~ 2019'
            times={<>
                <PreparationTime time='10 min' />
                <CookingTime time='11 min' flame='alta' />
            </>}
            ingredients={[
                { name: 'Pasta', quantity: 200, unit: 'g' },
                { name: 'Pomodori (maturi)', quantity: 200, unit: 'g' },
                { name: 'Aglio', quantity: 1, unit: 'spicchio' },
                { name: 'Basilico', quantity: 4, unit: 'foglie' },
                { name: 'Sale', quantity: 'q.b.' },
                { name: 'Olio', quantity: 'q.b.' },
            ]}
            instructions={<>
                <Parallel>
                    <ParallelBranch>
                        <Step>Preparare la pasta normalmente.</Step>
                    </ParallelBranch>

                    <ParallelBranch>
                        <Step>Frullare pomodori, aglio, basilico, olio e sale.</Step>
                    </ParallelBranch>
                </Parallel>

                <Step>Unire alla salsa e mescolare.</Step>
            </>}
        />
    );
}

export default defineRecipe(PastaPomodoroFrescoCrudo, TITLE);

