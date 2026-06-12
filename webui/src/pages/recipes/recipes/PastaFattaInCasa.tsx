import { defineRecipe } from './Util';

import {
    CookingTime,
    Suggestion,
    PreparationTime,
    RecipeLayout,
} from '../../../components/recipes';
import { Step } from '../../../components/flow';

const TITLE = 'Pasta fatta in casa';

function PastaFattaInCasa() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={155}
            servingsUnitSingular='g'
            servingsUnitPlural='g'
            source='Internet'
            addedOn='~ 2020'
            times={<>
                <PreparationTime time='2 h' />
                <CookingTime time='4 min' flame='alta' />
            </>}
            ingredients={[
                { name: 'Farina', quantity: 100, unit: 'g', category: 'Pasta semplice' },
                { name: 'Acqua', quantity: 55, unit: 'g', category: 'Pasta semplice' },

                { name: 'Farina', quantity: 100, unit: 'g', category: 'Pasta all\'uovo' },
                { name: 'Uovo', quantity: 1, category: 'Pasta all\'uovo' },
            ]}
            instructions={<>
                <Step>Impastare farina con acqua (o uova).</Step>
                <Step>Lasciare riposare l'impasto per 30 min, coperto da pellicola.</Step>
                <Step>Prendere l'impasto parte per parte, infarinarlo ed stenderlo con la macchina per la pasta.</Step>
                <Step>Infarinare ulteriormente ed usare la macchina per la pasta per tagliarla.</Step>
                <Step>Posare attentamente la pasta pronta su carta forno, assicurandosi non si sovrapponga.</Step>
                <Step>(Mettere tutta la pasta in congelatore.)</Step>
            </>}
            suggestions={<>
                <Suggestion>Usare farina di semola quando si deve stendere l'impasto, in quanto molto più comoda da lavorare.</Suggestion>
                <Suggestion>Non stendere l'impasto troppo velocemente, o si rovinerà. Se si rovina, basta reimpastarlo da capo.</Suggestion>
            </>}
        />
    );
}

export default defineRecipe(PastaFattaInCasa, TITLE);

