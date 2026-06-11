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

function SalsicciaVerdureAlForno() {
    return (
        <RecipeLayout
            title='Salsiccia e verdure al forno'
            servings={1}
            source='Abbate Maria Luisa'
            addedOn='~ 2018'
            times={<>
                <PreparationTime time='1 h' />
                <BakingTimeTopbottom time='1 h' temperature={180} />
            </>}
            ingredients={[
                // { name: 'Spaghetti', quantity: 200, unit: 'g' },  // Standard format
                // { name: 'Spaghetti', quantity: 200 },  // Standard format, unit is implied
                // { name: 'Spaghetti', quantity: 200, unit: 'g', category: 'Pasta' },  // Standard format with category
                // { name: 'Sale', quantity: 'q.b.' },  // Quantity not specified
                // { name: 'Pentola' },  // Quantity not applicable
                { name: 'Salsiccia', quantity: 3, unit: 'pezzetti' },
                { name: 'Patate', quantity: 1, unit: 'media' },
                { name: 'Carote', quantity: 1, unit: 'grande' },
                { name: 'Sedano', quantity: 1, unit: 'costa' },
                { name: 'Cipolla', quantity: 0.5 },
                { name: 'Aglio', quantity: 1, unit: 'spicchio' },
                { name: 'Dado', quantity: 0.5 },
                { name: 'Sale' },
                { name: 'Vino bianco', quantity: 1, unit: 'bicchiere' },
                { name: 'Prezzemolo' },
                { name: 'Olio' },
            ]}
            instructions={<>
                <Step>Mettere olio su teglia (non troppo).</Step>
                <Step>Preparare verdure a pezzetti.</Step>
                <Step>Cuocere in forno per 1 h.</Step>
            </>}
        />
    );
}

export default SalsicciaVerdureAlForno;
