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

function Spezzatino() {
    return (
        <RecipeLayout
            title='Spezzatino'
            servings={4}
            source='Paolo Orunesu'
            addedOn='~ 2019'
            times={<>
                <PreparationTime time='15 min' />
                <CookingTime time='4 h' flame='media' />
                <PreparationWait time='~ 8 h' />
            </>}
            ingredients={[
                // { name: 'Spaghetti', quantity: 200, unit: 'g' },  // Standard format
                // { name: 'Spaghetti', quantity: 200 },  // Standard format, unit is implied
                // { name: 'Spaghetti', quantity: 200, unit: 'g', category: 'Pasta' },  // Standard format with category
                // { name: 'Sale', quantity: 'q.b.' },  // Quantity not specified
                // { name: 'Pentola' },  // Quantity not applicable
                { name: 'Spezzatino', quantity: 1, unit: 'kg' },
                { name: 'Sale' },
                { name: 'Olio' },
                { name: 'Carote', quantity: 6 },
                { name: 'Cipolla', quantity: 1 },
                { name: 'Spicchi aglio', quantity: 2 },
                { name: 'Foglie alloro', quantity: 6 },
                { name: 'Foglie basilico', quantity: 2 },
                { name: 'Foglie menta', quantity: 2 },
                { name: 'Rametti rosmarino', quantity: 2 },
                { name: 'Piselli', quantity: 150, unit: 'g' },
                { name: 'Olive' },
                { name: 'Finocchio selvatico', quantity: 'poco' },
                { name: 'Vino rosso corposo', quantity: 2, unit: 'bicchieri' },
            ]}
            instructions={<>
                <Step>Mettere in una pentola olio, carne, cipolla, aglio e carote.</Step>
                <Step>Far cuocere fino a che la carne cambia colore (15-20 min).</Step>
                <Step>Aggiungere vino, sale erbe (tranne finocchio).</Step>
                <Step>Far cuocere fino a che carne è molto morbida.</Step>
                <Step>Aggiungere piselli, olive, finocchio selvatico.</Step>
                <Step>Far cuocere per 30 min.</Step>
                <Step>Far riposare per qualche ora.</Step>
            </>}
            suggestions={<>
                <Suggestion>In caso di necessità, aggiungere acqua.</Suggestion>
            </>}
        />
    );
}

export default Spezzatino;

