import { defineRecipe } from './Util';

import {
    Suggestion,
    PreparationTime,
    RecipeLayout,
    BakingTimeFan,
    PreparationWait,
} from '../../../components/recipes';
import { Step } from '../../../components/flow';
import { InlineMath } from 'react-katex';

const TITLE = 'Pane';

function Pane() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={4}
            servingsUnitSingular='panino'
            servingsUnitPlural='panini'
            source='Davide Ponzini'
            addedOn='2020'
            times={<>
                <PreparationTime time='30 min' />
                <PreparationWait time='2-4 h' />
                <BakingTimeFan time='20 min' temperature={220} />
            </>}
            ingredients={[
                { name: 'Farina "0"', quantity: 300, unit: 'g' },
                { name: 'Farina "1" e/o "2"', quantity: 200, unit: 'g' },
                { name: 'Olio d\'oliva', quantity: 20, unit: 'g' },
                { name: 'Acqua', quantity: 300, unit: 'g' },
                { name: 'Lievito fresco', quantity: 6, unit: 'g' },
                { name: 'Sale fino', quantity: 6, unit: 'g' },

                { name: 'Semi di girasole', quantity: 'q.b.', category: 'Opzionale' },
                { name: 'Semi di papavero', quantity: 'q.b.', category: 'Opzionale' },
                { name: 'Sesamo', quantity: 'q.b.', category: 'Opzionale' },
            ]}
            instructions={<>
                <Step>Preparare impasto.</Step>
                <Step>Lasciare riposare fino a raddoppio.</Step>
                <Step>Dividere in panetti, dare forma.</Step>
                <Step>Lasciare riposare fino a raddoppio.</Step>
                <Step>Cuocere in forno.</Step>
            </>}
            suggestions={<>
                <Suggestion>Tenere in forno un pentolino con acqua, per evitare che il pane diventi mollo col tempo.</Suggestion>
                <Suggestion>Per il pane senza olio, usare "<InlineMath math="acqua + olio" />" g di acqua.</Suggestion>
            </>}
            notes='Ricetta perfezionata durante il COVID-19.'
        />
    );
}

export default defineRecipe(Pane, TITLE);
