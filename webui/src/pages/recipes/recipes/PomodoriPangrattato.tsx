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

const TITLE = 'Pomodori ripieni di pan grattato ed erbe di provenza';
const URL = 'pomodori-pangrattato';

function PomodoriPangrattato() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={1}
            source='Samuele Daga'
            addedOn='2021'
            times={<>
                <PreparationTime time='10 min' />
                <BakingTimeFan time='10 min' temperature={180} />
            </>}
            ingredients={[
                { name: 'Pomodori cuore di bue', quantity: 2 },
                
                { name: 'Olio d\'oliva', quantity: 'q.b.', category: 'Ripieno' },
                { name: 'Sale', quantity: 'q.b.', category: 'Ripieno' },
                { name: 'Erbe provenzali', quantity: 'q.b.', category: 'Ripieno' },
                { name: 'Succo dei pomodori appena tagliati', category: 'Ripieno' },
            ]}
            instructions={<>
                <Step>Lavare i pomodori, tagliarli a metà.</Step>
                <Step>Svuotare l'interno aiutandosi con cucchiaino e coltello.</Step>
                <Step>Preparare il ripieno in una scodellina a parte.</Step>
                <Step>Farcire i pomodori.</Step>
                <Step>Cuocerli in forno.</Step>
            </>}
            suggestions={<>
                <Suggestion>Prestare attenzione a non far diventare i pomodori molli, o si sfalderanno in mano al momento del consumo.</Suggestion>
            </>}
        />
    );
}

PomodoriPangrattato.title = TITLE;
PomodoriPangrattato.url = URL;

export default PomodoriPangrattato;

