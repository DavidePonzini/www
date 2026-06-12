import { defineRecipe } from './Util';

import {
    CookingTime,
    RecipeLayout,
    PreparationWait,
} from '../../../components/recipes';
import { Step } from '../../../components/flow';

const TITLE = 'Riso con tritato - Jawad';

function RisoJawadTritato() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={1}
            source='Jawad Shurrush'
            addedOn='Marzo 2025'
            times={<>
                <CookingTime time='3 min' flame='alta' />
                <CookingTime time='10 min' flame='bassa' />
                <PreparationWait time='10 min' />
            </>}
            ingredients={[
                { name: 'Riso', quantity: 100, unit: 'g' },
                { name: 'Tritato', quantity: 200, unit: 'g' },
                { name: 'Acqua', quantity: 200, unit: 'g' },
                { name: 'Olio' },
                { name: 'Sale' },
                { name: 'Pepe nero' },
                { name: 'Pepe inglese' },
                { name: 'Noce moscata' },
                { name: 'Cannella' },
            ]}
            instructions={<>
                <Step>Far soffriggere tritato.</Step>
                <Step>Aggiungere riso, far scottare un attimo.</Step>
                <Step>Aggiungere acqua e spezie, far bollire l'acqua.</Step>
                <Step>Cuocere col coperchio (o piatto, deve andare un po' sotto pressione).</Step>
                <Step>Lasciare riposare.</Step>
                <Step>Mescolare delicatamente dal basso verso l'alto.</Step>
            </>}
        />
    );
}

export default defineRecipe(RisoJawadTritato, TITLE);
