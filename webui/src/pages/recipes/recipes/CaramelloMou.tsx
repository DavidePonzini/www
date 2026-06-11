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

const TITLE = 'Caramello Mou';
const URL = 'caramello-mou';

function CaramelloMou() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={100}
            servingsUnitSingular='g'
            servingsUnitPlural='g'
            source='Internet'
            addedOn='Aprile 2019'
            times={<>
                <PreparationTime time='1 min' />
                <CookingTime time='10 min' flame='bassa' />
            </>}
            ingredients={[
                { name: 'Zucchero', quantity: 200, unit: 'g' },
                { name: 'Panna fresca', quantity: 120, unit: 'g' },
            ]}
            instructions={<>
                <Parallel>
                    <ParallelBranch>
                        <Step>Far quasi bollire panna, lasciarla lì.</Step>
                    </ParallelBranch>
                
                    <ParallelBranch>
                        <Step>Mettere in pentolino di acciaio zucchero (e acqua, opzionale).</Step>
                        <Step>Far cuocere a fiamma bassa fino a 170°C.</Step>
                    </ParallelBranch>
                </Parallel>

                <Step>Unire panna e mescolare con un cucchiaio di acciaio.</Step>
            </>}
            suggestions={<>
                <Suggestion>Usare pentola molto più grande di quello che sembra. Per lavare usare acqua calda.</Suggestion>

                <Suggestion>Tara confezione: 17g.</Suggestion>
            </>}
        />
    );
}

CaramelloMou.title = TITLE;
CaramelloMou.url = URL;

export default CaramelloMou;

