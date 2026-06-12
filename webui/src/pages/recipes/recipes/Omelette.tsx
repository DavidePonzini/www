import { defineRecipe } from './Util';

import {
    CookingTime,
    PreparationTime,
    RecipeLayout,
} from '../../../components/recipes';
import { Step } from '../../../components/flow';

const TITLE = 'Omelette';

function Omelette() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={1}
            source='Davide Ponzini'
            addedOn='12 Agosto 2023'
            times={<>
                <PreparationTime time='5 min' />
                <CookingTime time='5?' flame='media' />
            </>}
            ingredients={[
                { name: 'Uova', quantity: 3},
                { name: 'Olio', quantity: 'q.b.' },
                { name: 'Sale', quantity: 'q.b.' },
                { name: 'Pepe', quantity: 'q.b.' },
                { name: 'Padella larga' },

                { name: 'Prosciutto cotto', quantity: 2, unit: 'fette', category: 'Ripieno' },
                { name: 'Formaggio', quantity: 'q.b.', category: 'Ripieno' },
            ]}
            instructions={<>
                <Step>Sbattere le uova e mescolarle con sale e pepe.</Step>
                <Step>Ungere la padella e far scaldare l'olio.</Step>
                <Step>Mettere il composto in padella ed allargarlo in modo da coprire l'intera superficie.</Step>
                <Step>Coprire col coperchio.</Step>
                <Step>Una volta che si è compattato, aggiungere su metà il ripieno e richiudere usando con attenzione la spatola.</Step>
                <Step>Terminare la cottura e servire.</Step>
            </>}
            suggestions={<>
            </>}
            notes=''
        />
    );
}

export default defineRecipe(Omelette, TITLE);
