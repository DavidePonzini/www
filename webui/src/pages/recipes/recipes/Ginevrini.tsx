import { defineRecipe } from './Util';

import {
    CookingTime,
    PreparationTime,
    RecipeLayout,
    PreparationWait,
} from '../../../components/recipes';
import { Step } from '../../../components/flow';

const TITLE = 'Ginevrini';

function Ginevrini() {
    return (
        <RecipeLayout
            title={TITLE}
            source='Internet'
            addedOn='Aprile 2019'
            times={<>
                <PreparationTime time='5 min' />
                <CookingTime time='5 min' flame='bassa' />
                <PreparationWait time='1-2 h' />
            </>}
            ingredients={[
                { name: 'Zucchero', quantity: 4, unit: 'g' },
                { name: 'Liquido (acqua, succo di frutta o liquore)', quantity: 1, unit: 'g' },
            ]}
            instructions={<>
                <Step>Mettere in un pentolino di acciaio zucchero e liquido.</Step>
                <Step>Far sciogliere a fiamma bassa. <u>Non far bollire</u>.</Step>
                <Step>Una volta pronto, usare cucciaino di acciaio per creare gocce su carta forno.</Step>
                <Step>Lasciare prendere aria per 1-2 ore.</Step>
            </>}
        />
    );
}

export default defineRecipe(Ginevrini, TITLE);
