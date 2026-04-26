import {
    CookingTime,
    Suggestion,
    PreparationTime,
    RecipeLayout,
} from "../../../components/recipes";
import { Step, Parallel, Branch } from "../../../components/flow";

function PureDiPatate() {
    return (
        <RecipeLayout
            title='Purè di patate'
            servings={4}
            source='Internet'
            addedOn='2023'
            times={<>
                <PreparationTime time='20 min' />
                <CookingTime time='40 min' flame='alta' />
                <CookingTime time='~5 min' flame='medio-bassa' />
            </>}
            ingredients={[
                { name: 'Patate a pasta gialla', quantity: 1, unit: 'kg' },
                { name: 'Latte intero', quantity: 250, unit: 'g' },
                { name: 'Parmigiano Reggiano grattugiato', quantity: 30, unit: 'g' },
                { name: 'Noce moscata', quantity: 'q.b.' },
                { name: 'Finocchio selvatico (o altre erbe)', quantity: 'q.b.' },
                { name: 'Sale', quantity: 'q.b.' },
                { name: 'Burro', quantity: 50, unit: 'g' },
            ]}
            instructions={<>
                <Step>Far bollire le patate per 1 h.</Step>
                <Step>Sbucciarle e schiacciarle e mettere in una pentola di acciaio.</Step>
                <Step>Aggiungere sale, noce moscata, finocchio e formaggio.</Step>
                <Step>Far bollire il latte.</Step>
                <Step>Non appena bolle, unirlo alle patate. Mescolare a fiamma bassa con una frusta.</Step>
                <Step>Quando è pronto, spegnere il fuoco ed aggiungere il burro.</Step>
            </>}
        />
    );
}

export default PureDiPatate;
