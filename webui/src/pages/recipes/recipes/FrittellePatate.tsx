import { defineRecipe } from './Util';

import {
    CookingTime,
    Suggestion,
    PreparationTime,
    RecipeLayout,
} from '../../../components/recipes';
import { Step } from '../../../components/flow';

const TITLE = 'Frittelle di patate';

function FrittellePatate() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={1}
            source='Abbate Maria Luisa'
            addedOn='~ 2018'
            times={<>
                <PreparationTime time='10 min' />
                <CookingTime time='5-10 min' flame='media' />
            </>}
            ingredients={[
                { name: 'Patate', quantity: 3 },
                { name: 'Farina', quantity: 2, unit: 'cucchiai' },
                { name: 'Sale', quantity: 'q.b.' },
                { name: 'Pepe', quantity: 'q.b.' },
                { name: 'Formaggio grattugiato', quantity: 'q.b.' },
                { name: 'Uova', quantity: 2 },
            ]}
            instructions={<>
                <Step> Sbucciare patate, lavarle. </Step>
                <Step> Grattugiare patate "tipo formaggio". </Step>
                <Step> Unire con sale, pepe, farina e formaggio. </Step>
                <Step> Unire uova sbattute, amalgamare. </Step>
                <Step> Creare frittelle in padella, schiacciandole con un cucchiaio. </Step>
                <Step> Una volta pronte, metterle in carta <i>asciuga-olio</i>. </Step>
            </>}
            suggestions={<>
                <Suggestion> Immergere il cucchiaio nell'olio frequentemente per non fare attaccare le patate. </Suggestion>
            </>}
        />
    );
}

export default defineRecipe(FrittellePatate, TITLE);
