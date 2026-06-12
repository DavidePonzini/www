import { defineRecipe } from './Util';

import {
    PreparationTime,
    RecipeLayout,
    BakingTimeTopbottom,
} from '../../../components/recipes';
import { Step } from '../../../components/flow';

const TITLE = 'Polpette';

function Polpette() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={4}
            source='Maria Luisa Abbate'
            addedOn='Agosto 2024'
            times={<>
                <PreparationTime time='40 min' description='(Per patate)' />
                <PreparationTime time='30 min' />
                <BakingTimeTopbottom time='25 min' temperature={180} />
                <BakingTimeTopbottom time='20 min' temperature={180} />
            </>}
            ingredients={[
                { name: 'Patate', quantity: 1, unit: 'kg' },
                { name: 'Tritato', quantity: 700, unit: 'g' },
                { name: 'Uova', quantity: 2 },
                { name: 'Formaggio grattugiato', quantity: 50, unit: 'g' },
                { name: 'Pan grattato', quantity: 400, unit: 'g' },
                { name: 'Sale' },
                { name: 'Pepe' },
                { name: 'Noce moscata' },
            ]}
            instructions={<>
                <Step>Far bollire patate.</Step>
                <Step>Schiacciarle, aggiungere tutti gli altri ingredienti.</Step>
                <Step>Mescolare bene a mano e correggere di pan grattato fino a che non hanno raggiunto consistenza giusta.</Step>
                <Step>Fare palline piccole e schiacciarle, disporle su carta forno.</Step>
                <Step>Cuocere in forno, girarle su sé stesse.</Step>
                <Step>Terminare la cottura in forno.</Step>
            </>}
        />
    );
}

export default defineRecipe(Polpette, TITLE);
