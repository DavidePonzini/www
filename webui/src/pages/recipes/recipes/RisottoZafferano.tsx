import {
    CookingTime,
    Suggestion,
    PreparationTime,
    RecipeLayout,
    BakingTimeBottom,
    BakingTimeFan,
    BakingTimeTop,
    BakingTimeTopbottom,
    PreparationWait,
} from "../../../components/recipes";
import { Step, Parallel, ParallelBranch } from "../../../components/flow";

const TITLE = 'Risotto allo zafferano';
const URL = 'risotto-zafferano';

function RisottoZafferano() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={2}
            source='Internet'
            addedOn='2024'
            times={<>
                <PreparationTime time='2 min' />
                <CookingTime time='10-15 min' flame='media' />
            </>}
            ingredients={[
                { name: 'Riso', quantity: 200, unit: 'g' },
                { name: 'Cipolla', quantity: 0.5 },
                { name: 'Vino bianco' },
                { name: 'Zafferano' },
                { name: 'Brodo' },
                { name: 'Olio' },
                { name: 'Burro', quantity: 50, unit: 'g', category: 'Mantecatura' },
                { name: 'Parmigiano', quantity: 50, unit: 'g', category: 'Mantecatura' },
            ]}
            instructions={<>
                <Step>Tagliare la cipolla a cubetti fini.</Step>
                <Step>Soffriggere cipolla in padella.</Step>
                <Step>Aggiungere riso, soffriggere qualche minuto.</Step>
                <Step>Sfumare con vino.</Step>
                <Step>Aggiungere brodo poco alla volta, fino a che è quasi pronto.</Step>
                <Step>Aggiungere zafferano e mescolare per bene.</Step>
                <Step>Continuare a cuocere fino a che è pronto.</Step>
                <Step>Spegnere il fuoco, mescolare con burro e formaggio.</Step>
            </>}
        />
    );
}

RisottoZafferano.title = TITLE;
RisottoZafferano.url = URL;

export default RisottoZafferano;

