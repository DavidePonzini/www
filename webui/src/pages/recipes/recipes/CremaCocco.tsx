import { defineRecipe } from './Util';

import {
    CookingTime,
    PreparationWait,
    RecipeLayout,
} from '../../../components/recipes';
import { Step } from '../../../components/flow';

const TITLE = 'Crema di cocco';
const URL = 'crema-cocco';

function CremaCocco() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={1}
            servingsUnitSingular='litro'
            servingsUnitPlural='litri'
            source='ChatGPT'
            addedOn='17 Maggio 2026'
            times={<>
                <CookingTime time='10 min' flame='media' />
                <PreparationWait time='2 h' />
            </>}
            ingredients={[
                { name: 'Latte di cocco', quantity: 500, unit: 'g' },
                { name: 'Zucchero', quantity: 750, unit: 'g' },
                { name: 'Succo di limone', quantity: 15, unit: 'g' },
                { name: 'Sale', quantity: 1, unit: 'g' }
            ]}
            instructions={<>
                <Step>Versare il latte di cocco e lo zucchero in un pentolino sul fuoco.</Step>
                <Step>Far cuocere e mescolare fino a che non si è sciolto tutto. Attenzione a non fare bollire.</Step>
                <Step>Far raffreddare fino a 60°C.</Step>
                <Step>Aggiungere succo di limone e sale, mescolare bene.</Step>
            </>}
        />
    );
}

export default defineRecipe(CremaCocco, TITLE);
