import { defineRecipe } from './Util';

import {
    PreparationTime,
    RecipeLayout,
} from '../../../components/recipes';
import { Step } from '../../../components/flow';

const TITLE = 'Pisto';

function Pisto() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={20}
            servingsUnitSingular='g'
            servingsUnitPlural='g'
            source='Internet'
            addedOn='Dicembre 2024'
            times={<>
                <PreparationTime time='15 min' />
            </>}
            ingredients={[
                { name: 'Pepe bianco', quantity: 7.5, unit: 'g' },
                { name: 'Noce moscata', quantity: 2.5, unit: 'g' },
                { name: 'Coriandolo', quantity: 2.5, unit: 'g' },
                { name: 'Cannella', quantity: 6.5, unit: 'g' },
                { name: 'Chiodi di garofano', quantity: 1 },
                { name: 'Anice stellato', quantity: 1, unit: 'stella' },
            ]}
            instructions={<>
                <Step>Tritare le spezie al mortaio.</Step>
            </>}
        />
    );
}

export default defineRecipe(Pisto, TITLE);