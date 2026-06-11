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

function CipolleCaramellate() {
    return (
        <RecipeLayout
            title='Cipolle caramellate'
            servings={2}
            source='Internet'
            addedOn='Maggio 2025'
            times={<>
                <PreparationTime time='5 min' />
                <CookingTime time='20+ min' flame='bassa' />
                <CookingTime time='20 min' flame='bassa' />
            </>}
            ingredients={[
                // { name: 'Spaghetti', quantity: 200, unit: 'g' },  // Standard format
                // { name: 'Spaghetti', quantity: 200 },  // Standard format, unit is implied
                // { name: 'Spaghetti', quantity: 200, unit: 'g', category: 'Pasta' },  // Standard format with category
                // { name: 'Sale', quantity: 'q.b.' },  // Quantity not specified
                // { name: 'Pentola' },  // Quantity not applicable
                { name: 'Cipolle', quantity: 2 },
                { name: 'Olio', quantity: 'poco' },
                { name: 'Sale', quantity: 'q.b.' },
                { name: 'Aceto balsamico', quantity: 1, unit: 'cucchiaino' },
                { name: 'Zucchero', quantity: 5, unit: 'cucchiaini' },
            ]}
            instructions={<>
                <Step>Soffriggere a fiamma bassa cipolle con olio e sale fino a che non iniziano a bruciarsi.</Step>
                <Step>Aggiungere aceto e zucchero.</Step>
                <Step>Continuare a cuocere a fiamma bassa, fino a quando non si ottiene il colore desiderato.</Step>
            </>}
        />
    );
}

export default CipolleCaramellate;

