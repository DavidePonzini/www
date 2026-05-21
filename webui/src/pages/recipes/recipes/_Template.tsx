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
            source=''
            addedOn='Marzo 2025'
            times={<>
                <PreparationTime time='5 min' />
                <CookingTime time='10 min' flame='alta' />
            </>}
            ingredients={[
                // { name: 'Spaghetti', quantity: 200, unit: 'g' },  // Standard format
                // { name: 'Sale', quantity: 'q.b.' },  // Quantity not specified
            ]}
            instructions={<>
            </>}
            suggestions={<>
            </>}
        />
    );
}

export default Template;
