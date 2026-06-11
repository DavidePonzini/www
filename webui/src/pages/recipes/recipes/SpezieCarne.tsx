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

const TITLE = 'Spezie per carni';
const URL = 'spezie-carne';
    
function SpezieCarne() {
    return (
        <RecipeLayout
            title={TITLE}
            source='Supermercato'
            addedOn='2019'
            ingredients={[
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

SpezieCarne.title = TITLE;
SpezieCarne.url = URL;

export default SpezieCarne;