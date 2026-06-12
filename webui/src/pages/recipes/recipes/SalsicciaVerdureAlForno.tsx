import { defineRecipe } from './Util';

import {
    PreparationTime,
    RecipeLayout,
    BakingTimeTopbottom,
} from '../../../components/recipes';
import { Step } from '../../../components/flow';

const TITLE = 'Salsiccia e verdure al forno';

function SalsicciaVerdureAlForno() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={1}
            source='Abbate Maria Luisa'
            addedOn='~ 2018'
            times={<>
                <PreparationTime time='1 h' />
                <BakingTimeTopbottom time='1 h' temperature={180} />
            </>}
            ingredients={[
                { name: 'Salsiccia', quantity: 3, unit: 'pezzetti' },
                { name: 'Patate', quantity: 1, unit: 'media' },
                { name: 'Carote', quantity: 1, unit: 'grande' },
                { name: 'Sedano', quantity: 1, unit: 'costa' },
                { name: 'Cipolla', quantity: 0.5 },
                { name: 'Aglio', quantity: 1, unit: 'spicchio' },
                { name: 'Dado', quantity: 0.5 },
                { name: 'Sale' },
                { name: 'Vino bianco', quantity: 1, unit: 'bicchiere' },
                { name: 'Prezzemolo' },
                { name: 'Olio' },
            ]}
            instructions={<>
                <Step>Mettere olio su teglia (non troppo).</Step>
                <Step>Preparare verdure a pezzetti.</Step>
                <Step>Cuocere in forno per 1 h.</Step>
            </>}
        />
    );
}

export default defineRecipe(SalsicciaVerdureAlForno, TITLE);