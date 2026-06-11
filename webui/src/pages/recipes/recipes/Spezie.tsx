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

function SpezieCarne() {
    return (
        <RecipeLayout
            title='Spezie per carni'
            source='Supermercato'
            addedOn='2019'
            ingredients={[
                // { name: 'Spaghetti', quantity: 200, unit: 'g' },  // Standard format
                // { name: 'Spaghetti', quantity: 200 },  // Standard format, unit is implied
                // { name: 'Spaghetti', quantity: 200, unit: 'g', category: 'Pasta' },  // Standard format with category
                // { name: 'Sale', quantity: 'q.b.' },  // Quantity not specified
                // { name: 'Pentola' },  // Quantity not applicable
                { name: 'Sale' },
                { name: 'Rosmarino' },
                { name: 'Origano' },
                { name: 'Pepe' },
                { name: 'Salvia' },
                { name: 'Ginepro' },
                { name: 'Prezzemolo' },
                { name: 'Aglio' },
            ]}
        />
    );
}

function SpeziePatate() {
    return (
        <RecipeLayout
            title='Spezie per patate'
            source='Supermercato'
            addedOn='2019'
            ingredients={[
                { name: 'Sale' },
                { name: 'Rosmarino' },
                { name: 'Basilico' },
                { name: 'Maggiorana' },
                { name: 'Timo' },
                { name: 'Salvia' },
                { name: 'Ginepro' },
                { name: 'Aglio' },
                { name: 'Alloro' },
                { name: 'Coriandolo' },
                { name: 'Prezzemolo' },
                { name: 'Cipolla' },
            ]}
        />
    );
}

export { SpezieCarne, SpeziePatate };
