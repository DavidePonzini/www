import { defineRecipe } from './Util';

import {
    PreparationTime,
    RecipeLayout,
    BakingTimeFan,
    PreparationWait,
} from '../../../components/recipes';
import { Step, Parallel, ParallelBranch } from '../../../components/flow';

const TITLE = 'Torta di Rosaria';

function TortaRosaria() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={8}
            source='Sofia Russo'
            addedOn='6 Giugno 2026'
            times={<>
                <PreparationTime time='40 min' />
                <BakingTimeFan time='15-20 min' temperature={160} />
                <PreparationWait time='2 h' description='In frigorifero' />
            </>}
            ingredients={[
                { name: 'Cioccolata fondente', quantity: 200, unit: 'g' },
                { name: 'Burro', quantity: 200, unit: 'g' },
                { name: 'Zucchero a velo', quantity: 100, unit: 'g' },
                { name: 'Uova', quantity: 6 },
            ]}
            instructions={<>
                <Parallel>
                    <ParallelBranch>
                        <Step>Fondere a bagnomaria la cioccolata.</Step>
                        <Step>Unire il burro con la cioccolata fusa.</Step>
                        <Step>Mescolare fino a che si è sciolto.</Step>
                        <Step>Lasciare raffreddare.</Step>
                    </ParallelBranch>

                    <ParallelBranch>
                        <Step>Separe i tuorli dagli albumi.</Step>
                        <Step>Montare a neve gli albumi.</Step>
                        <Step>Montare i tuorli con lo zucchero.</Step>
                    </ParallelBranch>
                </Parallel>

                <Step>Unire il cioccolato con i tuorli.</Step>
                <Step><i><s>(Assaggiare perché è molto buono)</s></i></Step>
                <Step>Unire gli albumi, mescolando delicatamente.</Step>
                <Step>Versare ⅔ della miscela in una teglia.</Step>
                <Step>Cuocere in forno.</Step>
                <Step>Guarnire con l'impasto restante.</Step>
                <Step>Riporre in frigorifero.</Step>
            </>}
            notes='CompleSofi <3'
        />
    );
}

export default defineRecipe(TortaRosaria, TITLE);