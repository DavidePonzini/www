import { defineRecipe } from './Util';

import {
    PreparationTime,
    RecipeLayout,
    PreparationWait,
} from '../../../components/recipes';
import { Step, Parallel, ParallelBranch } from '../../../components/flow';

const TITLE = 'Gelato';

function Gelato() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={1}
            servingsUnitSingular='litro (circa)'
            servingsUnitPlural='litri (circa)'
            source='Abbate Maria Luisa (modificata)'
            addedOn='Agosto 2023'
            times={<>
                <PreparationWait time='24 h'>Congelatore — vaschette</PreparationWait>
                <PreparationTime time='30 min' />
                <PreparationWait time='30 min'>Macchina per gelati</PreparationWait>
            </>}
            ingredients={[
                { name: 'Panna fresca', quantity: 250, unit: 'ml' },
                { name: 'Latte intero fresco', quantity: 375, unit: 'ml' },
                { name: 'Zucchero', quantity: 125, unit: 'g' },
                { name: 'Neutro per gelati', quantity: 3.125, unit: 'g' },
                { name: 'Macchina per i gelati' },
                { name: 'Planetaria o fruste' },

                { name: 'Cocco', quantity: 75, unit: 'g', category: 'Cocco' },

                { name: 'Cioccolato fondente a scaglie', category: 'Stracciatella' },

                { name: 'Vaniglia', quantity: 5, unit: 'ml', category: 'Fiordilatte' },
            ]}
            instructions={<>
                <Step>Far raffreddare in congelatore le vaschette.</Step>

                <Parallel>
                    <ParallelBranch>
                        <Step>Mescolare bene neutro e zucchero.</Step>
                        <Step>Unire al latte e mescolare.</Step>
                    </ParallelBranch>

                    <ParallelBranch>
                        <Step>Montare parzialmente la panna.</Step>
                    </ParallelBranch>
                </Parallel>

                <Step>Unire il composto alla panna.</Step>
                <Step>Azionare la macchina per i gelati e versare il composto.</Step>
                <Step>Aggiungere eventuali ingredienti solidi.</Step>
                <Step>Aspettare che il gelato abbia raggiunto una consistenza adeguata.</Step>
                <Step>Riporre il preparato nel congelatore.</Step>
            </>}
        />
    );
}

export default defineRecipe(Gelato, TITLE);
