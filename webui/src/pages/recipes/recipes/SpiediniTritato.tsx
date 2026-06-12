import { defineRecipe } from './Util';

import {
    CookingTime,
    PreparationTime,
    RecipeLayout,
} from '../../../components/recipes';
import { Step } from '../../../components/flow';

const TITLE = 'Spiedini di tritato';

function SpiediniTritato() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={5}
            servingsUnitSingular='spiedino'
            servingsUnitPlural='spiedini'
            source='Davide Ponzini'
            addedOn='18 Luglio 2023'
            times={<>
                <PreparationTime time='15 min' />
                <CookingTime time='5 min' flame='bassa' />
            </>}
            ingredients={[
                { name: 'Tritato bovino', quantity: 200, unit: 'g' },
                { name: 'Prosciutto crudo (oppure speck)', quantity: 150, unit: 'g' },
                { name: 'Sale' },
                { name: 'Pepe' },
                { name: 'Spezie per carni' },
                { name: 'Formaggio' },
                { name: 'Spiedini' },
            ]}
            instructions={<>
                <Step>Mescolare tritato con formaggio e spezie.</Step>
                <Step>Disporre in rotoli, infilare spiedini.</Step>
                <Step>Friggere in 1 cm di olio di semi.</Step>
            </>}
            notes='Ricetta ispirata ad un piatto mangiato da Marco Daga.'
        />
    );
}

export default defineRecipe(SpiediniTritato, TITLE);