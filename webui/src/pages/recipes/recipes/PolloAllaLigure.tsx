import { defineRecipe } from './Util';

import {
    CookingTime,
    PreparationTime,
    RecipeLayout,
} from '../../../components/recipes';
import { Step, Parallel, ParallelBranch } from '../../../components/flow';

const TITLE = 'Pollo alla ligure';

function PolloAllaLigure() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={5}
            source='IPSEOA Marco Polo'
            addedOn='2022'
            times={<>
                <PreparationTime time='15 min' />
                <CookingTime time='1 h' flame='media+' />
            </>}
            ingredients={[
                { name: 'Cosciotti di pollo', quantity: 1.5, unit: 'kg' },
                { name: 'Olio di oliva', quantity: 75, unit: 'g' },
                { name: 'Vino bianco secco', quantity: 50, unit: 'g' },
                { name: 'Olive nere piccole taggiasche', quantity: 100, unit: 'g' },
                { name: 'Pinoli', quantity: 50, unit: 'g' },
                { name: 'Aglio', quantity: 'q.b.' },
                { name: 'Alloro', quantity: 'q.b.' },
                { name: 'Rosmarino', quantity: 'q.b.' },
                { name: 'Brodo vegetale', quantity: 'q.b.' },
                { name: 'Sale fino', quantity: 'q.b.' },
            ]}
            instructions={<>
                <Parallel>
                    <ParallelBranch>
                        <Step>Preparare il brodo vegetale.</Step>
                    </ParallelBranch>

                    <ParallelBranch>
                        <Parallel>
                            <ParallelBranch>
                                <Step>Tritare finemente aglio e rosmarino.</Step>
                            </ParallelBranch>

                            <ParallelBranch>
                                <Step>Tagliare in pezzi il pollo.</Step>
                                <Step>Rosolare il pollo in una padella con olio.</Step>
                            </ParallelBranch>
                        </Parallel>

                        <Step>Aggiungere alloro, aglio e rosmarino.</Step>
                        <Step>Rosolare fino a quando non avrà preso un bel colorito dorato.</Step>
                        <Step>Sfumare con vino bianco e lasciare evaporare.</Step>
                        <Step>Aggiungere pinoli ed olive.</Step>
                    </ParallelBranch>
                </Parallel>

                <Step>Coprire con brodo ed aggiustare di sale.</Step>
                <Step>Cuocere per 30 min a fiamma bassa.</Step>
            </>}
            notes='Ricetta riadattata dal coniglio alla ligure.'
        />
    );
}

export default defineRecipe(PolloAllaLigure, TITLE);
