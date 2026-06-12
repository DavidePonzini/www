import { defineRecipe } from './Util';

import {
    CookingTime,
    PreparationTime,
    RecipeLayout,
} from '../../../components/recipes';
import { Step, Parallel, ParallelBranch } from '../../../components/flow';

const TITLE = 'Pasta con zucca e salsiccia';

function PastaZuccaSalsiccia() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={3}
            source='Sofia Russo'
            addedOn='Novembre 2025'
            times={<>
                <PreparationTime time='15 min' />
                <CookingTime time='20 min' flame='media' />
            </>}
            ingredients={[
                { name: 'Pasta', quantity: 300, unit: 'g' },
                { name: 'Zucca', quantity: 500, unit: 'g' },
                { name: 'Salsiccia', quantity: 250, unit: 'g' },
                { name: 'Formaggio grattugiato', quantity: 50, unit: 'g' },
                { name: 'Aglio', quantity: 1, unit: 'spicchio' },
                { name: 'Sale', quantity: 'q.b.' },
                { name: 'Pepe', quantity: 'q.b.' },
                { name: 'Olio', quantity: 'q.b.' },
            ]}
            instructions={<>
                <Parallel>
                    <ParallelBranch>
                        <Step>Tagliare la zucca a cubetti</Step>
                        <Step>Soffriggerla in padella con olio e aglio, sale, pepe e acqua</Step>
                        <Step>Chiudere con coperchio e far cuocere fino a che non diventa morbida. Aggiungere acqua all'occorenza</Step>
                        <Step>Unire al formaggio e frullare, regolando di sale e pepe.</Step>
                    </ParallelBranch>

                    <ParallelBranch>
                        <Step>Far rosolare la salsiccia (aperta) in una padella con un filo d'olio.</Step>
                        <Step>Quando è pronta, metterne da parte due cucchiai.</Step>
                    </ParallelBranch>

                    <ParallelBranch>
                        <Step>Far cuocere la pasta.</Step>
                    </ParallelBranch>
                </Parallel>
                
                <Step>Scolare la pasta e mescolarla con la salsiccia.</Step>
                <Step>Aggiungere la crema e mescolare.</Step>
                <Step>Impiattare e guarnire con la salsiccia messa a parte.</Step>
            </>}
            suggestions={<>
            </>}
            notes=''
        />
    );
}

export default defineRecipe(PastaZuccaSalsiccia, TITLE);

