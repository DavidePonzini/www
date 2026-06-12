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

const TITLE = 'Nocciole tostate';
const URL = 'nocciole-tostate';

function NoccioleTostate() {
    return (
        <RecipeLayout
            title={TITLE}
            source='Cesare Ponzini'
            addedOn='~ 2019'
            times={<>
                <BakingTimeTopbottom time='5 min' temperature={180} />
                <PreparationWait time='1 h' />
            </>}
            ingredients={[
                { name: 'Nocciole', quantity: 'q.b.' },
            ]}
            instructions={<>
                <Step>Mettere le nocciole in forno preriscaldato.</Step>
                <Step>Dopo 5 minuti spegnere e lasciare raffreddare dentro al forno.</Step>
            </>}
        />
    );
}

NoccioleTostate.title = TITLE;
NoccioleTostate.url = URL;

export default NoccioleTostate;
