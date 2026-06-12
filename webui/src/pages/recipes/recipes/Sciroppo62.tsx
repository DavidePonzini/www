import { defineRecipe } from './Util';

import {
    CookingTime,
    PreparationWait,
    RecipeLayout,
} from '../../../components/recipes';
import { Step } from '../../../components/flow';

const TITLE = 'Sciroppo 62%';

function Sciroppo62() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={1}
            servingsUnitSingular='litro'
            servingsUnitPlural='litri'
            source='Internet'
            addedOn='Marzo 2025'
            times={<>
                <CookingTime time='10 min' flame='media' />
                <PreparationWait time='2 h' />
            </>}
            ingredients={[
                { name: 'Acqua', quantity: 380, unit: 'g' },
                { name: 'Zucchero', quantity: 620, unit: 'g' },
            ]}
            instructions={<>
                <Step>Mettere zucchero e acqua in un pentolino sul fuoco.</Step>
                <Step>Far cuocere e mescolare fino a che non si è sciolto tutto. Attenzione a non fare bollire.</Step>
                <Step>Far raffreddare.</Step>
            </>}
        />
    );
}

export default defineRecipe(Sciroppo62, TITLE);