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

const TITLE = 'Frittata';
const URL = 'frittata';

function Frittata() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={1}
            source='Internet'
            addedOn='Marzo 2025'
            times={<>
                <PreparationTime time='5 min' />
                <CookingTime time='10 min' flame='medio-alta' />
            </>}
            ingredients={[
                { name: 'Uova', quantity: 3},
                { name: 'Olio', quantity: 'q.b.' },
                { name: 'Sale', quantity: 'q.b.' },
                { name: 'Pepe', quantity: 'q.b.' },

                { name: 'Cipolla', quantity: 'q.b.', category: 'A scelta' },
                { name: 'Formaggio grattugiato', quantity: 'q.b.', category: 'A scelta' },
                { name: 'Prezzemolo', quantity: 'q.b.', category: 'A scelta' },
                { name: 'Salumi a fette', quantity: 'q.b.', category: 'A scelta' },
            ]}
            instructions={<>
                <Step>Sbattere le uova.</Step>
                <Step>Unire gli altri ingredienti, mescolare.</Step>
                <Step>Versare olio su padella, farlo scaldare molto.</Step>
                <Step>Versare uova sbattute in padella e far cuocere, tenendo chiuso con il coperchio.</Step>
                <Step>Girare ogni tanto, facendo attenzione non si attacchi.</Step>
                <Step>Capovolgere frittata usando il coperchio.</Step>
            </>}
            suggestions={<>
                <Suggestion>Far scaldare tanto l'olio (tenendo la fiamma al massimo) prima di versare le uova.
                    Una volta versate, abbassarla. Ripetere lo stesso procedimento quando si capovolge.</Suggestion>
            </>}
            notes=''
        />
    );
}

Frittata.title = TITLE;
Frittata.url = URL;

export default Frittata;

