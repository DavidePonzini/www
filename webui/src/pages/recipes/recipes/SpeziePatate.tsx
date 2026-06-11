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

const TITLE = 'Spezie per patate';
const URL = 'spezie-patate';

function SpeziePatate() {
    return (
        <RecipeLayout
            title={TITLE}
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

SpeziePatate.title = TITLE;
SpeziePatate.url = URL;

export default SpeziePatate;