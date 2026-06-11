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

function PolloCaramellato() {
    return (
        <RecipeLayout
            title='Pollo caramellato'
            servings={1}
            source='Internet'
            addedOn='~ 2019'
            times={<>
                <PreparationTime time='40 min' />
                <CookingTime time='15 min' flame='media' />
            </>}
            ingredients={[
                // { name: 'Spaghetti', quantity: 200, unit: 'g' },  // Standard format
                // { name: 'Spaghetti', quantity: 200 },  // Standard format, unit is implied
                // { name: 'Spaghetti', quantity: 200, unit: 'g', category: 'Pasta' },  // Standard format with category
                // { name: 'Sale', quantity: 'q.b.' },  // Quantity not specified
                // { name: 'Pentola' },  // Quantity not applicable
                { name: 'Petto di pollo', quantity: 200, unit: 'g' },
                { name: 'Zucchero', quantity: 50, unit: 'g' },
                { name: 'Olio d\'oliva', quantity: 6, unit: 'g' },
                { name: 'Salsa di soia', quantity: 20, unit: 'g' },
                { name: 'Pepe' },
            ]}
            instructions={<>
                <Step>Tagliare il pollo a straccetti.</Step>
                <Step>Far marinare il pollo nella salsa di soia per 30 min.</Step>
                <Step>Far caramellare zucchero in olio in padella antiaderente.</Step>
                <Step>Unire pollo, sale, pepe e cuocere 10 min.</Step>
            </>}
            suggestions={<>
            </>}
        />
    );
}

export default PolloCaramellato;
