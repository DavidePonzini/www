import { defineRecipe } from './Util';

import {
    CookingTime,
    Suggestion,
    PreparationTime,
    RecipeLayout,
    BakingTimeFan,
    BakingTimeTopbottom,
} from '../../../components/recipes';
import { Step } from '../../../components/flow';

const TITLE = 'Patate duchessa';

function PatateDuchessa() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={3}
            source='Internet'
            addedOn='2023'
            times={<>
                <PreparationTime time='15 min' />
                <CookingTime time='40 min' flame='alta' />
                <BakingTimeTopbottom time='6 min' temperature={180} />
                <BakingTimeFan time='9 min' temperature={180} />
            </>}
            ingredients={[
                { name: 'Patate rosse', quantity: 700, unit: 'g' },
                { name: 'Burro', quantity: 70, unit: 'g' },
                { name: 'Tuorli', quantity: 3 },
                { name: 'Parmigiano Reggiano grattugiato', quantity: 70, unit: 'g' },
                { name: 'Sale', quantity: 'q.b.' },
                { name: 'Pepe', quantity: 'q.b.' },
                { name: 'Noce moscata', quantity: 'q.b.' },
                { name: 'Sac-à-poche con beccuccio a stella' },
            ]}
            instructions={<>
                <Step>Far bollire le patate.</Step>
                <Step>Pulire le patate e passarle, tipo purè.</Step>
                <Step>Aggiungere tuorli, burro, formaggio, sale, pepe e amalgamare.</Step>
                <Step>Mettere in una sac-à-poche e spremerle sulla carta forno.</Step>
                <Step>Cuocere in forno.</Step>
            </>}
            suggestions={<>
                <Suggestion>Attenzione a non esagerare col pepe, se no copre il sapore.</Suggestion>
            </>}
        />
    );
}

export default defineRecipe(PatateDuchessa, TITLE);
                
