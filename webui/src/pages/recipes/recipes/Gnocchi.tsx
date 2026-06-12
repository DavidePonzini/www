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

const TITLE = 'Gnocchi di patate';
const URL = 'gnocchi';

function Gnocchi() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={1}
            source='Davide Ponzini'
            addedOn='~ 2022'
            times={<>
                <PreparationTime time='20 min' />
                <CookingTime time='45 min' flame='alta' description='Bollitura' />
                <CookingTime time='2 min' flame='alta' description='Cottura' />
            </>}
            ingredients={[
                { name: 'Patate', quantity: 200, unit: 'g' },
                { name: 'Farina "0"', quantity: 60, unit: 'g' },
                { name: 'Sale', quantity: 1, unit: 'g' },
            ]}
            instructions={<>
                <Step>Lessare le patate con la buccia.</Step>
                <Step>Sbucciare le patate, schiacciarle.</Step>
                <Step>Unire farina ed impastare.</Step>
                <Step>Stendere l'impasto, ricavare filoncini e strapparli a 2 cm di lunghezza.</Step>
                <Step>Rigare passando sui lembi di una forchetta, per dare la tipica forma.</Step>
                <Step>Cuocere.</Step>
            </>}
            suggestions={<>
                <Suggestion><b>Non usare patate novelle</b>: non sono adatte a diventare gnocchi e si sfaldano durante la cottura.</Suggestion>
                <Suggestion>Non lavorare eccessivamente l'impasto, se no gli gnocchi diventeranno duri durante la cottura.</Suggestion>
                <Suggestion>Girare la forchetta al contrario, poggiarla sulla spianatoia e passare gli gnocchi dalla punta verso il manico.</Suggestion>
            </>}
            notes=''
        />
    );
}

Gnocchi.title = TITLE;
Gnocchi.url = URL;

export default Gnocchi;

