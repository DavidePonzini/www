import { defineRecipe } from './Util';

import {
    CookingTime,
    PreparationTime,
    RecipeLayout,
} from '../../../components/recipes';
import { Step } from '../../../components/flow';

const TITLE = 'Cipolle caramellate';

function CipolleCaramellate() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={2}
            source='Internet'
            addedOn='Maggio 2025'
            times={<>
                <PreparationTime time='5 min' />
                <CookingTime time='20+ min' flame='bassa' />
                <CookingTime time='20 min' flame='bassa' />
            </>}
            ingredients={[
                { name: 'Cipolle', quantity: 2 },
                { name: 'Olio', quantity: 'poco' },
                { name: 'Sale', quantity: 'q.b.' },
                { name: 'Aceto balsamico', quantity: 1, unit: 'cucchiaino' },
                { name: 'Zucchero', quantity: 5, unit: 'cucchiaini' },
            ]}
            instructions={<>
                <Step>Soffriggere a fiamma bassa cipolle con olio e sale fino a che non iniziano a bruciarsi.</Step>
                <Step>Aggiungere aceto e zucchero.</Step>
                <Step>Continuare a cuocere a fiamma bassa, fino a quando non si ottiene il colore desiderato.</Step>
            </>}
        />
    );
}

export default defineRecipe(CipolleCaramellate, TITLE);
