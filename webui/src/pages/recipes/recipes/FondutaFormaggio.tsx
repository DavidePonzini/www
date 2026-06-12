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

const TITLE = 'Fonduta di formaggio';
const URL = 'fonduta-formaggio';

function FondutaFormaggio() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={1}
            source='Manuela Del Bianco'
            addedOn='~ 2017'
            times={<>
                <PreparationTime time='10 min' />
                <CookingTime time='1+ h' flame='bassa' />
            </>}
            ingredients={[
                { name: 'Toma piemontese', quantity: 33, unit: 'g' },
                { name: 'Raschera', quantity: 33, unit: 'g' },
                { name: 'Fontina', quantity: 33, unit: 'g' },
                { name: 'Latte', quantity: 'q.b.' },
                { name: 'Noce moscata', quantity: 'q.b.' },
            ]}
            instructions={<>
                <Step>Tagliare formaggi a cubetti.</Step>
                <Step>Metterli in un pentolino con il latte.</Step>
                <Step>Cuocere a fuoco basso-medio fino a che il latte non bolle.</Step>
                <Step>Aggiungere noce moscata.</Step>
                <Step>Mescolare costantemente per 1 h.</Step>
            </>}
            suggestions={<>
                <Suggestion>Per far rassodare più velocemente, è possibile aggiungere della farina alla fine.</Suggestion>
            </>}
        />
    );
}

FondutaFormaggio.title = TITLE;
FondutaFormaggio.url = URL;

export default FondutaFormaggio;
