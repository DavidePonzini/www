import { defineRecipe } from './Util';

import {
    PreparationTime,
    RecipeLayout,
    BakingTimeTopbottom,
} from '../../../components/recipes';
import { Step } from '../../../components/flow';
import { InlineMath } from 'react-katex';

const TITLE = 'Pizza';

function Pizza() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={3}
            servingsUnitSingular='pizza'
            servingsUnitPlural='pizze'
            source='Davide Ponzini'
            addedOn='~ 2021'
            times={<>
                <PreparationTime time='2 h' />
                <BakingTimeTopbottom time='7 min 20 s' temperature={240} />
            </>}
            ingredients={[
                { name: 'Farina "0"', quantity: 300, unit: 'g', category: 'Impasto' },
                { name: 'Farina "1" e/o "2"', quantity: 200, unit: 'g', category: 'Impasto' },
                { name: "Olio d'oliva", quantity: 20, unit: 'g', category: 'Impasto' },
                { name: 'Acqua', quantity: 280, unit: 'g', category: 'Impasto' },
                { name: 'Lievito fresco', quantity: 6, unit: 'g', category: 'Impasto' },
                { name: 'Sale fino', quantity: 6, unit: 'g', category: 'Impasto' },

                { name: 'Passata di pomodoro', quantity: 375, unit: 'g', category: 'Condimento (per tutte le pizze)' },
                { name: "Olio d'oliva", quantity: 'q.b.', category: 'Condimento (per tutte le pizze)' },
                { name: 'Origano', quantity: 'q.b.', category: 'Condimento (per tutte le pizze)' },
                { name: 'Mozzarella', quantity: 1.5, unit: '', category: 'Condimento (per tutte le pizze)' },
                { name: 'Salumi a scelta', quantity: 225, unit: 'g', category: 'Condimento (per tutte le pizze)' },
            ]}
            instructions={<>
                <Step>Preparare impasto</Step>
                <Step>Lasciare riposare fino a raddoppio</Step>
                <Step>Dividere in <InlineMath>n</InlineMath> panetti</Step>
                <Step>Lasciare riposare fino a raddoppio</Step>
                <Step>Stendere panetto, condire ed infornare</Step>
            </>}
            suggestions={<>
            </>}
            notes=''
        />
    );
}

export default defineRecipe(Pizza, TITLE);

