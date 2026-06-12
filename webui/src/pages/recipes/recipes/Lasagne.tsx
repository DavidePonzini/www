import { defineRecipe } from './Util';

import {
    Suggestion,
    PreparationTime,
    RecipeLayout,
    BakingTimeTopbottom,
} from '../../../components/recipes';
import { Step } from '../../../components/flow';

import Ragu2 from './Ragu2';
import Besciamella from './Besciamella';

const TITLE = 'Lasagne';

function Lasagne() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={4}
            source='Abbate Maria Luisa'
            addedOn='~ 2021'
            times={<>
                <PreparationTime time='30 min'>Esclusa preparazione Ragù e Besciamella</PreparationTime>
                <BakingTimeTopbottom time='1 h' temperature={180} />
            </>}
            ingredients={[
                { name: 'Ragù', quantity: 500, unit: 'g', url: Ragu2.url },
                { name: 'Besciamella', quantity: 1, unit: 'l', url: Besciamella.url },
                { name: 'Sfoglia lasagne', quantity: 250, unit: 'g'},
                { name: 'Prosciutto cotto', quantity: 250, unit: 'g' },
                { name: 'Formaggio grattugiato' },
                { name: 'Olio' },
            ]}
            instructions={<>
                <Step>Mettere un velo d'olio su un testo. Coprire bene i bordi ed il centro, disegnando una serpentina.</Step>
                <Step>Versare uno strato di ragù e besciamella.</Step>
                <Step>Posare uno strato di lasagne (sovrapposte per circa 1 cm).</Step>
                <Step>Aggiungere strato di ragù e besciamella.</Step>
                <Step>Aggiungere strato di prosciutto e formaggio.</Step>
                <Step>Ripetere questi 3 passaggi fino a fine ingredienti.</Step>
                <Step>Posare un ultimo strato di lasagne.</Step>
                <Step>Coprire il tutto con uno strato di ragù e besciamella.</Step>
                <Step>Cuocere in forno per 30 minuti.</Step>
                <Step>Controllare la cottura.</Step>
                <Step>Cuocere in forno per altri 20-30 minuti.</Step>
            </>}
            suggestions={<>
                <Suggestion>Fare attenzione ai bordi, si rischia di bruciare.</Suggestion>
                <Suggestion>Se si usa il ragù già pronto, sono necessari almeno 3 barattoli.</Suggestion>
            </>}
        />
    );
}

export default defineRecipe(Lasagne, TITLE);

