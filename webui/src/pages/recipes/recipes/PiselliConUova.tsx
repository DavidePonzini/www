import { defineRecipe } from './Util';

import {
    CookingTime,
    PreparationTime,
    RecipeLayout,
} from '../../../components/recipes';
import { Step } from '../../../components/flow';

const TITLE = 'Piselli con uova';

function PiselliConUova() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={1}
            source='Abbate Maria Luisa'
            addedOn='Agosto 2023'
            times={<>
                <PreparationTime time='5 min' />
                <CookingTime time='15 min' flame='media' />
            </>}
            ingredients={[
                { name: 'Piselli', quantity: 200, unit: 'g' },
                { name: 'Cipolla', quantity: 0.5 },
                { name: 'Uova', quantity: 2 },
                { name: 'Sale', quantity: 'q.b.' },
                { name: 'Olio', quantity: 'q.b.' },
                { name: 'Pepe', quantity: 'q.b.' },
                { name: 'Dado (opzionale)', quantity: 1 },
            ]}
            instructions={<>
                <Step>Soffriggere cipolla tagliata.</Step>
                <Step>Aggiungere piselli e coprirli con acqua. Aggiungere dado. Chiudere padella con coperchio.</Step>
                <Step>Lasciare cuocere fino a che i piselli non sono pronti.</Step>
                <Step>Aggiungere uova e cuocerle fino a quanto desiderato. Opzionalemente, mescolare gli albumi con i piselli, facendo attenzione a non toccare i tuorli.</Step>
            </>}
        />
    );
}

export default defineRecipe(PiselliConUova, TITLE);

