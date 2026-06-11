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

function Pisto() {
    return (
        <RecipeLayout
            title='Pisto'
            servings={20}
            servingsUnitSingular='g'
            servingsUnitPlural='g'
            source='Internet'
            addedOn='Dicembre 2024'
            times={<>
                <PreparationTime time='15 min' />
            </>}
            ingredients={[
                // { name: 'Spaghetti', quantity: 200, unit: 'g' },  // Standard format
                // { name: 'Spaghetti', quantity: 200 },  // Standard format, unit is implied
                // { name: 'Spaghetti', quantity: 200, unit: 'g', category: 'Pasta' },  // Standard format with category
                // { name: 'Sale', quantity: 'q.b.' },  // Quantity not specified
                // { name: 'Pentola' },  // Quantity not applicable
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

export default Pisto;
