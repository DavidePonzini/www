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

const TITLE = 'Risotto alle zucchine';
const URL = 'risotto-zucchine';

function RisottoZucchine() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={1}
            source='Davide Ponzini & Jawad Shurrush'
            addedOn='2024'
            times={<>
                <PreparationTime time='2 min' />
                <CookingTime time='10-15 min' flame='media' />
            </>}
            ingredients={[
                { name: 'Riso', quantity: 200, unit: 'g' },
                { name: 'Cipolla', quantity: 0.5 },
                { name: 'Zucchina', quantity: 1 },
                { name: 'Vino bianco' },
                { name: 'Zafferano' },
                { name: 'Brodo' },
                { name: 'Olio' },

                { name: 'Burro', quantity: 50, unit: 'g', category: 'Mantecatura' },
                { name: 'Parmigiano', quantity: 50, unit: 'g', category: 'Mantecatura' },
            ]}
            instructions={<>
                <Step>Tagliare cipolla e zucchina a cubetti fini.</Step>
                <Step>Soffriggere in padella.</Step>
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

RisottoZucchine.title = TITLE;
RisottoZucchine.url = URL;

export default RisottoZucchine;

