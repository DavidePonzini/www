import { defineRecipe } from './Util';

import {
    CookingTime,
    Suggestion,
    PreparationTime,
    RecipeLayout,
} from '../../../components/recipes';
import { Step } from '../../../components/flow';

const TITLE = 'Patatine fritte';

function PatatineFritte() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={1}
            servingsUnitSingular='porzione piuttosto abbondante'
            servingsUnitPlural='porzioni piuttosto abbondanti'
            source='Abbate Maria Luisa'
            addedOn='~ 2018'
            times={<>
                <PreparationTime time='20 min' />
                <CookingTime time='10-20 min' flame='medio-bassa' />
            </>}
            ingredients={[
                { name: 'Patate', quantity: 500, unit: 'g' },
                { name: 'Olio di semi' },
                { name: 'Sale' },
                { name: 'Pepe' },
            ]}
            instructions={<>
                <Step>Tagliare le patate a fette spesse ~ 1 mm (o anche meno).</Step>
                <Step>Lavarle ed asciugarle accuratamente.</Step>
                <Step>Friggere in olio bollente.</Step>
                <Step>Toglierle ed assorbire l'olio con lo scottex.</Step>
                <Step>Aggiungere sale e pepe, mescolare.</Step>
            </>}
            suggestions={<>
                <Suggestion>Usare il fornello grande con la fiamma "verso il basso".</Suggestion>
            </>}
        />
    );
}

export default defineRecipe(PatatineFritte, TITLE);

