import { defineRecipe } from './Util';

import {
    PreparationTime,
    RecipeLayout,
    BakingTimeTopbottom,
    PreparationWait,
} from '../../../components/recipes';
import { Step } from '../../../components/flow';

const TITLE = 'Cookies';

function Cookies() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={30}
            servingsUnitSingular='cookie'
            servingsUnitPlural='cookies'
            source='Internet'
            addedOn='Settembre 2025'
            times={<>
                <PreparationTime time='20 min' />
                <PreparationWait time='30 min' />
                <BakingTimeTopbottom time='25-30 min' temperature={165} />
            </>}
            ingredients={[
                { name: 'Farina 00', quantity: 250, unit: 'g' },
                { name: 'Gocce di cioccolato fondente', quantity: 200, unit: 'g' },
                { name: 'Burro', quantity: 150, unit: 'g' },
                { name: 'Zucchero di canna', quantity: 90, unit: 'g' },
                { name: 'Zucchero', quantity: 90, unit: 'g' },
                { name: 'Uovo', quantity: 1 },
                { name: 'Sale', quantity: 'q.b.' },
                { name: 'Lievito per dolci vanigliato', quantity: 5, unit: 'g' },
            ]}
            instructions={<>
                <Step>Mescolare in una ciotola burro e zucchero.</Step>
                <Step>Aggiungere l'uovo e mescolare.</Step>
                <Step>A parte, mescolare farina e lievito. Unire al composto e mescolare.</Step>
                <Step>Aggiungere sale e gocce di cioccolato e mescolare.</Step>
                <Step>Far riposare in frigorifero.</Step>
                <Step>Far palline da ~25g e disporle su un testo (usare carta forno).</Step>
                <Step>Cuocere in forno.</Step>
                <Step>Lasciare raffreddare.</Step>
            </>}
        />
    );
}

export default defineRecipe(Cookies, TITLE);