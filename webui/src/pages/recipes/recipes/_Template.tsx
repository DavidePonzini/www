import { defineRecipe } from './Util';

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

const TITLE = '';

function Template() {
    return (
        <RecipeLayout
            title={TITLE}
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
                // { name: 'Spaghetti', quantity: 200, unit: 'g' },                         // Standard format
                // { name: 'Spaghetti', quantity: 200, unit: 'g', category: 'Pasta' },      // Standard format with category
                // { name: 'Spaghetti', quantity: 200 },                                    // Standard format, unit is implied in the ingredient name
                // { name: 'Sale', quantity: 'q.b.' },                                      // Quantity not specified
                // { name: 'Pentola' },                                                     // Quantity not applicable, defaults to dashed line
            ]}
            instructions={<>
            </>}
            suggestions={<>
            </>}
            notes=''
        />
    );
}

export default defineRecipe(Template, TITLE);
