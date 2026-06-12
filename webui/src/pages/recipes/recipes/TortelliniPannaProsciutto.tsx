import { defineRecipe } from './Util';

import {
    CookingTime,
    PreparationTime,
    RecipeLayout,
} from '../../../components/recipes';
import { Step, Parallel, ParallelBranch } from '../../../components/flow';

const TITLE = 'Tortellini panna e prosciutto';

function TortelliniPannaProsciutto() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={1}
            source='Abbate Maria Luisa'
            addedOn='< 2019'
            times={<>
                <PreparationTime time='2 min' />
                <CookingTime time='10 min' flame='alta' />
            </>}
            ingredients={[
                { name: 'Tortellini', quantity: 200, unit: 'g' },
                { name: 'Panna fresca', quantity: 200, unit: 'g' },
                { name: 'Prosciutto cotto', quantity: 100, unit: 'g' },
                { name: 'Chiodi di garofano', quantity: 'q.b.' },
            ]}
            instructions={<>
                <Parallel>
                    <ParallelBranch>
                        <Step>Preparare i tortellini.</Step>
                    </ParallelBranch>

                    <ParallelBranch>
                        <Step>Soffriggere il prosciutto fino a che inizia a diventare croccante.</Step>
                        <Step>Aggiungere la panna e i chiodi di garofano.</Step>
                        <Step>Mescolare fino a che si addensa.</Step>
                    </ParallelBranch>
                </Parallel>

                <Step>Scolare i tortellini ed unirli al condimento.</Step>
            </>}
        />
    );
}

export default defineRecipe(TortelliniPannaProsciutto, TITLE);
