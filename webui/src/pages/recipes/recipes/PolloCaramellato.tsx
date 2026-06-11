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

const TITLE = 'Pollo caramellato';
const URL = 'pollo-caramellato';

function PolloCaramellato() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={1}
            source='Internet'
            addedOn='~ 2019'
            times={<>
                <PreparationTime time='40 min' />
                <CookingTime time='15 min' flame='media' />
            </>}
            ingredients={[
                { name: 'Petto di pollo', quantity: 200, unit: 'g' },
                { name: 'Zucchero', quantity: 50, unit: 'g' },
                { name: 'Olio d\'oliva', quantity: 6, unit: 'g' },
                { name: 'Salsa di soia', quantity: 20, unit: 'g' },
                { name: 'Pepe', quantity: 'q.b.' },
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

PolloCaramellato.title = TITLE;
PolloCaramellato.url = URL;

export default PolloCaramellato;
