import { defineRecipe } from './Util';

import {
    PreparationTime,
    RecipeLayout,
    BakingTimeFan,
    PreparationWait,
} from '../../../components/recipes';
import { Step } from '../../../components/flow';

const TITLE = 'Focaccia';

function Focaccia() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={1}
            servingsUnitSingular='teglia (500 g)'
            servingsUnitPlural='teglie (500 g)'
            source='Daniele Traversaro'
            addedOn='Giugno 2023'
            times={<>
                <PreparationTime time='30 min' />
                <PreparationWait time='2-4 h' />
                <BakingTimeFan time='15-20 min' temperature={180} />
            </>}
            ingredients={[
                { name: 'Farina', quantity: 400, unit: 'g', category: 'Impasto' },
                { name: 'Acqua (tiepida)', quantity: 250, unit: 'g', category: 'Impasto' },
                { name: 'Sale', quantity: 9, unit: 'g', category: 'Impasto' },
                { name: 'Olio EVO', quantity: 25, unit: 'g', category: 'Impasto' },
                { name: 'Lievito fresco', quantity: 12, unit: 'g', category: 'Impasto' },
                { name: 'Zucchero', quantity: 1, unit: 'cucchiaino', category: 'Impasto' },

                { name: 'Acqua', quantity: 150, unit: 'g', category: 'Salamoia' },
                { name: 'Olio EVO', quantity: 25, unit: 'g', category: 'Salamoia' },
                { name: 'Sale', quantity: 'q.b.', category: 'Salamoia' },
            ]}
            instructions={<>
                <Step>Prepare impasto.</Step>
                <Step>Lasciarlo riposare per 15 min coperto da un canovaccio umido.</Step>
                <Step>Ripiegare impasto su se stesso un paio di volte.</Step>
                <Step>Ungere la teglia.</Step>
                <Step>Mettere l'impasto sulla teglia, lasciarlo lievitare in forno spento per 60 min.</Step>
                <Step><i>Controllare che la teglia sia ancora adeguatamente unta</i>.</Step>
                <Step>Schiacciare l'impasto per coprire tutta la teglia.</Step>
                <Step>Lasciare lievitare in forno per 30 min.</Step>
                <Step>Fare i buchi con le dita, cospargere con tutta la salamoia.</Step>
                <Step>Lasciare lievitare in forno per 60 min.</Step>
                <Step>Cuocere in forno preriscaldato.</Step>
            </>}
            suggestions={<>
            </>}
            notes=''
        />
    );
}

export default defineRecipe(Focaccia, TITLE);
