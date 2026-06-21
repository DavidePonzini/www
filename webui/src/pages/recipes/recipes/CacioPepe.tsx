import { defineRecipe } from './Util';

import {
    CookingTime,
    Suggestion,
    PreparationTime,
    RecipeLayout,
} from '../../../components/recipes';
import { Step, Parallel, ParallelBranch } from '../../../components/flow';

const TITLE = 'Cacio e Pepe';

function CacioPepe() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={3.2}
            source=''
            addedOn='Marzo 2025'
            times={<>
                <PreparationTime time='5 min' />
                <CookingTime time='10 min' flame='alta' />
            </>}
            ingredients={[
                { name: 'Spaghetti', quantity: 320, unit: 'g' },
                { name: 'Pecorino Romano', quantity: 200, unit: 'g' },
                { name: 'Pepe nero', quantity: 5, unit: 'g' },
            ]}
            instructions={<>
                <Parallel>
                    <ParallelBranch>
                        <Step>Cuocere gli spaghetti in poca acqua salata.</Step>
                    </ParallelBranch>

                    <ParallelBranch>
                        <Step>Tostare il pepe in una padella a fuoco medio fino a quando non si sente l'odore.</Step>
                        <Step>Aggiungere acqua di cottura degli spaghetti e mescolare</Step>
                    </ParallelBranch>
                </Parallel>

                <Step>Quando la pasta è molto al dente, metterla nella padella col pepe e finire di cuocerla. Aggiungere acqua di cottura quanto serve.</Step>
                <Step>Preparare la crema di Pecorino a parte, unendo il Pecorino Romano con l'acqua di cottura. Dovrà avere una consistenza pastosa.</Step>
                <Step>Quando la pasta è pronta, spegnere il fuoco e aggiungere la crema di Pecorino. Mescolare bene.</Step>
            </>}
            suggestions={<>
                <Suggestion>Per la pasta, usare meno acqua del necessario.</Suggestion>
                <Suggestion>Preparare la crema di Pecorino sul momento, altrimenti perde la consistenza.</Suggestion>
            </>}
            notes=''
        />
    );
}

export default defineRecipe(CacioPepe, TITLE);
