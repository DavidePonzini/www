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

const TITLE = 'Uova sode';
const URL = 'uova-sode';

function UovaSode() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={1}
            servingsUnitSingular='uovo'
            servingsUnitPlural='uova'
            source='Jawad Shurrush'
            addedOn='19 Luglio 2023'
            times={<>
                <CookingTime time='8 min' flame='alta' />
            </>}
            ingredients={[
                { name: 'Uova', quantity: 1 },
            ]}
            instructions={<>
                <Step>Riempire pentolino di acqua e mettere uova.</Step>
                <Step>Far bollire acqua; iniziare a contare il tempo indicato da quando bolle.</Step>
                <Step>A fine cottura rimuoverle e passare subito sotto l'acqua fredda.</Step>
                <Step>Togliere il guscio.</Step>
            </>}
        />
    );
}

UovaSode.title = TITLE;
UovaSode.url = URL;

export default UovaSode;

