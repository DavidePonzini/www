import {
    CookingTime,
    Suggestion,
    PreparationTime,
    RecipeLayout,
    BakingTimeBottom,
    BakingTimeFan,
    BakingTimeTop,
    BakingTimeTopbottom,
    PreparationWait,
} from "../../../components/recipes";
import { Step, Parallel, ParallelBranch } from "../../../components/flow";

function SpiediniTritato() {
    return (
        <RecipeLayout
            title='Spiedini di tritato'
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
                // { name: 'Spaghetti', quantity: 200, unit: 'g' },  // Standard format
                // { name: 'Spaghetti', quantity: 200 },  // Standard format, unit is implied
                // { name: 'Spaghetti', quantity: 200, unit: 'g', category: 'Pasta' },  // Standard format with category
                // { name: 'Sale', quantity: 'q.b.' },  // Quantity not specified
                // { name: 'Pentola' },  // Quantity not applicable
                { name: 'Tritato bovino', quantity: 200, unit: 'g' },
                { name: 'Prosciutto crudo', quantity: 150, unit: 'g', note: '(oppure speck)' },
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

export default SpiediniTritato;
