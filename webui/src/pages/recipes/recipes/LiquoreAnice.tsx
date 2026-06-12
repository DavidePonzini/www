import { defineRecipe } from './Util';

import {
    Suggestion,
    PreparationTime,
    RecipeLayout,
    PreparationWait,
} from '../../../components/recipes';
import { Step } from '../../../components/flow';

const TITLE = 'Liquore all\'anice';

function LiquoreAnice() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={4}
            servingsUnitSingular='litro'
            servingsUnitPlural='litri'
            source='Internet (modificata)'
            addedOn='~ 2019'
            times={<>
                <PreparationTime time='10 min'>Ingredienti</PreparationTime>
                <PreparationWait time='30 giorni' />
                <PreparationTime time='15 min'>Sciroppo</PreparationTime>
                <PreparationWait time='4 ore'>Far raffreddare lo sciroppo</PreparationWait>
                <PreparationWait time='2 mesi (minimo) - 6+ mesi (ideale)' />
            </>}
            ingredients={[
                { name: 'Alcohol per liquori', quantity: 2, unit: 'litri' },
                { name: 'Acqua', quantity: 2, unit: 'litri' },
                { name: 'Zucchero', quantity: 1.5, unit: 'kg' },
                { name: 'Anice stellato', quantity: 150, unit: 'g' },
                { name: 'Chiodi di garofano', quantity: 15 },
                { name: 'Stecche di cannella', quantity: 5 },
            ]}
            instructions={<>
                <Step>Mettere in una bottiglia alcohol, anice, chiodi di garofano, cannella.</Step>
                <Step>Lasciare riposare, agitando ogni giorno.</Step>
                <Step>Preparare sciroppo con acqua e zucchero.</Step>
                <Step>Far bollire per 2 minuti.</Step>
                <Step>Far raffreddare sciroppo.</Step>
                <Step>Unire al liquore.</Step>
                <Step>Lasciare riposare.</Step>
            </>}
            suggestions={<>
                <Suggestion>Il liquore migliora di sapore dopo un po' di tempo. Si consiglia di farlo riposare ben oltre il tempo indicato.</Suggestion>

                {/*
                    Costo stimato di produzione: ~ 10.37€/litro
                    Marzo 2023.
                    
                    stecche cannella       2.36 €
                    chiodi di garofano     0.14 €
                    anice                ~ 3.00 € (comprato da Jawad, in Italia anche 60€/kg)
                    alcohol               33.80 €
                    zucchero               2.17 €
                    acqua                    -- €
                    _______________________________________
                    totale                41.47 € per 4 lt
                     
                    escluse dal conteggio:
                        bottiglie          4.29 € (aranciata Lurisia, 0.275 lt/bottiglia)
                */}
            </>}
        />
    );
}

export default defineRecipe(LiquoreAnice, TITLE);


