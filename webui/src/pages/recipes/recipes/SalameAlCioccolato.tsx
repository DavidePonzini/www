import { defineRecipe } from './Util';

import {
    PreparationTime,
    RecipeLayout,
    PreparationWait,
} from '../../../components/recipes';
import { Step, Parallel, ParallelBranch } from '../../../components/flow';

const TITLE = 'Salame al cioccolato';

function SalameAlCioccolato() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={6}
            source='Internet'
            addedOn='~ 2019'
            times={<>
                <PreparationTime time='1 h' />
                <PreparationWait time='~ 8 h'>Frigorifero</PreparationWait>
            </>}
            ingredients={[
                { name: 'Cioccolato fondente', quantity: 200, unit: 'g' },
                { name: 'Biscotti secchi', quantity: 200, unit: 'g' },
                { name: 'Burro', quantity: 200, unit: 'g' },
                { name: 'Zucchero', quantity: 200, unit: 'g' },
                { name: 'Uova', quantity: 2 },
                { name: 'Rum', quantity: 10, unit: 'g' },
                { name: 'Zucchero a velo' },
            ]}
            instructions={<>
                <Parallel>
                    <ParallelBranch>
                        <Step>Spezzettare biscotti.</Step>
                    </ParallelBranch>

                    <ParallelBranch>
                        <Step>Tagliare cioccolato a fette con coltello.</Step>
                        <Step>Sciogliere cioccolato a bagnomaria.</Step>
                    </ParallelBranch>

                    <ParallelBranch>
                        <Step>Sbattere uova in una ciotola.</Step>
                    </ParallelBranch>

                </Parallel>

                <Step>Montare burro e zucchero in una ciotola (con un cucchiaio).</Step>
                <Step>Aggiungere rum. Mescolare.</Step>
                <Step>Aggiungere uova. Mescolare.</Step>
                <Step>Aggiungere cioccolato fuso. Mescolare.</Step>
                <Step>Aggiungere biscotti. Mescolare.</Step>
                <Step>Formare un salame con l'impasto. Avvolgere in carta da forno.</Step>
                <Step>Mettere in frigo per almeno 8 ore.</Step>
                <Step>Prima di servire, spolverare con zucchero a velo.</Step>   
            </>}
            suggestions={<>
            </>}
        />
    );
}

export default defineRecipe(SalameAlCioccolato, TITLE);
