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

function PomodoriPangrattato() {
    return (
        <RecipeLayout
            title='Pomodori ripieni di pan grattato ed erbe di provenza'
            servings={1}
            source='Samuele Daga'
            addedOn='2021'
            times={<>
                <PreparationTime time='10 min' />
                <BakingTimeFan time='10 min' temperature={180} />
            </>}
            ingredients={[
                // { name: 'Spaghetti', quantity: 200, unit: 'g' },  // Standard format
                // { name: 'Spaghetti', quantity: 200 },  // Standard format, unit is implied
                // { name: 'Spaghetti', quantity: 200, unit: 'g', category: 'Pasta' },  // Standard format with category
                // { name: 'Sale', quantity: 'q.b.' },  // Quantity not specified
                // { name: 'Pentola' },  // Quantity not applicable
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

export default PomodoriPangrattato;

