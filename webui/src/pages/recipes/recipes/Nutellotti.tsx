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

const TITLE = 'Nutellotti';
const URL = 'nutellotti';

function Nutellotti() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={25}
            servingsUnitSingular='biscottino'
            servingsUnitPlural='biscottini'
            source='Marta Daga'
            addedOn='Aprile 2020'
            times={<>
                <PreparationTime time='30 min' />
                <PreparationWait time='15-20 min' />
                <BakingTimeTopbottom time='10 min' temperature={170} />
            </>}
            ingredients={[
                // { name: 'Spaghetti', quantity: 200, unit: 'g' },  // Standard format
                // { name: 'Spaghetti', quantity: 200 },  // Standard format, unit is implied
                // { name: 'Spaghetti', quantity: 200, unit: 'g', category: 'Pasta' },  // Standard format with category
                // { name: 'Sale', quantity: 'q.b.' },  // Quantity not specified
                // { name: 'Pentola' },  // Quantity not applicable
                { name: 'Nutella', quantity: 180, unit: 'g' },
                { name: 'Uova', quantity: 1 },
                { name: 'Farina 00', quantity: 135, unit: 'g' },
                
                { name: 'Nutella', quantity: 125, unit: 'g', category: 'Farcitura' },
                { name: 'Granella di nocciole', quantity: 30, unit: 'g', category: 'Farcitura' },
            ]}
            instructions={<>
                <Step>Mescolare uovo e Nutella con le fruste per 2 minuti.</Step>
                <Step>Aggiungere la farina, setacciandola. Mescolare con una spatola.</Step>
                <Step>Creare un panetto, avvolgere nella pellicola, lasciare riposare in frigo per 15-20 minuti.</Step>
                <Step>Formare tante piccole palline con le mani. Appiattire con le dita il centro di ciascun pezzo.</Step>
                <Step>Mettere la Nutella rimanente in una Sac-a-poche (con bocchetta stellata).</Step>
                <Step>Farcire la cavità creata precedentemente.</Step>
                <Step>Ricoprire con granella di nocciole.</Step>
                <Step>Mettere in forno.</Step>
                <Step>Far raffreddare.</Step>
            </>}
        />
    );
}

Nutellotti.title = TITLE;
Nutellotti.url = URL;

export default Nutellotti;

