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

function Template() {
    return (
        <RecipeLayout
            title=''
            servings={2}
            servingsUnitSingular=''
            servingsUnitPlural=''
            source=''
            addedOn='Marzo 2025'
            times={<>
                <PreparationTime time='5 min' />
                <CookingTime time='10 min' flame='alta' />
            </>}
            ingredients={[
                // { name: 'Spaghetti', quantity: 200, unit: 'g' },  // Standard format
                // { name: 'Spaghetti', quantity: 200 },  // Standard format, unit is implied
                // { name: 'Spaghetti', quantity: 200, unit: 'g', category: 'Pasta' },  // Standard format with category
                // { name: 'Sale', quantity: 'q.b.' },  // Quantity not specified
                // { name: 'Pentola' },  // Quantity not applicable
            ]}
            instructions={<>
            </>}
            suggestions={<>
            </>}
            notes=''
        />
    );
}

export default Template;
