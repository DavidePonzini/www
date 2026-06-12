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

const TITLE = 'Crema di nocciole "tipo Nutella"';
const URL = 'crema-nocciole-nutella';

function CremaNoccioleNutella() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={1}
            source='Samuele Daga (rivisitata)'
            addedOn='~ 2018'
            times={<>
                <PreparationTime time='15 min' />
            </>}
            ingredients={[
                { name: 'Nocciole tostate', quantity: 150, unit: 'g' },
                { name: 'Zucchero', quantity: '<<150', unit: 'g' },
                { name: 'Miele d\'acacia', quantity: '>>75', unit: 'g' },
                { name: 'Cacao in polvere', quantity: 7, unit: 'g' },
                { name: 'Zenzero in polvere', quantity: 'q.b.' },
            ]}
            instructions={<>
                <Step>Tostare le nocciole</Step>
                <Step>Tritare le nocciole fino a che rilasciano l'olio</Step>
                <Step>Aggiungere zucchero, tritare</Step>
                <Step>Aggiungere miele, cacao e zenzero, tritare</Step>
            </>}
        />
    );
}

CremaNoccioleNutella.title = TITLE;
CremaNoccioleNutella.url = URL;

export default CremaNoccioleNutella;
