import { defineRecipe } from './Util';

import {
    Suggestion,
    PreparationTime,
    RecipeLayout,
    BakingTimeTop,
} from '../../../components/recipes';
import { Step, Parallel, ParallelBranch } from '../../../components/flow';
import SalsaTahina from './SalsaTahina';

const TITLE = 'Kebab';

function Kebab() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={3}
            source='Jawad Shurrush'
            addedOn='15 Luglio 2023'
            times={<>
                <PreparationTime time='30 min' />
                <BakingTimeTop time='40-50 min' temperature={200}>Grill</BakingTimeTop>
                <BakingTimeTop time='10-15 min' temperature={200}>Grill - Se si aggiunge la salsa nel forno</BakingTimeTop>
            </>}
            ingredients={[
                { name: 'Tritato bovino', quantity: 750, unit: 'g' },
                { name: 'Prezzemolo', quantity: 75, unit: 'g' },
                { name: 'Cipolle', quantity: 1.5 },
                { name: 'Sale', quantity: 'q.b.' },
                { name: 'Pepe', quantity: 'q.b.' },
                { name: 'Pepe inglese', quantity: 'q.b.' },
                { name: 'Noce moscata', quantity: 'q.b.' },
                { name: 'Cannella', quantity: 'q.b.' },

                { name: 'Salsa Tahina', quantity: 250, unit: 'g', category: 'Salsa', url: SalsaTahina.url },
                { name: 'Succo di limone', quantity: 1, unit: 'limone', category: 'Salsa' },
                { name: 'Sale', quantity: 'q.b.', category: 'Salsa' },
                { name: 'Acqua', quantity: 'q.b.', category: 'Salsa' },
                { name: 'Prezzemolo', quantity: 'q.b.', category: 'Salsa' },
                { name: 'Aglio', quantity: 'q.b.', category: 'Salsa' },
                { name: 'Pomodorini', quantity: 'q.b.', category: 'Salsa' },
            ]}
            instructions={<>
                <Parallel>
                    <ParallelBranch>
                        <Step>Tagliare cipolle a pezzi grossi (circa 1 cm).</Step>
                        <Step>Tagliare prezzemolo in modo fine.</Step>
                        <Step>Unire prezzemolo, cipolle, spezie e carne. Amalgamarle per bene.</Step>
                        <Step>Disporre la carne a forma di `dita' su un testo. Usare carta forno ed un leggero strato di olio.</Step>
                        <Step>Cuocere in forno.</Step>
                    </ParallelBranch>

                    <ParallelBranch>
                        <Step>Unire salsa Tahina, eventuali spezie opzionali, succo di limone ed acqua.</Step>
                        <Step>Mescolare e correggere fino a raggiungimento di una consistenza ottimale.</Step>
                    </ParallelBranch>
                </Parallel>
            </>}
            suggestions={<>
                <Suggestion>La salsa Tahini si può sia mettere in forno che mangiare a parte dopo.</Suggestion>
                <Suggestion>Se la salsa si mette in forno, deve avere una consistenza abbastanza liquida (tipo Yoghurt).</Suggestion>
            </>}
            notes='Quello che noi chiamiamo comunemente Kebab si chiama in realtà Shawarma.'
        />
    );
}

export default defineRecipe(Kebab, TITLE);

