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

function SalsaBarbeque() {
    return (
        <RecipeLayout
            title='Salsa Barbeque'
            servings={500}
            servingsUnitSingular='ml'
            servingsUnitPlural='ml'
            source='Samuele Daga'
            addedOn='~ 2018'
            times={<>
                <PreparationTime time='10 min' />
                <CookingTime time='20 min' flame='bassa' />
            </>}
            ingredients={[
                // { name: 'Spaghetti', quantity: 200, unit: 'g' },  // Standard format
                // { name: 'Spaghetti', quantity: 200 },  // Standard format, unit is implied
                // { name: 'Spaghetti', quantity: 200, unit: 'g', category: 'Pasta' },  // Standard format with category
                // { name: 'Sale', quantity: 'q.b.' },  // Quantity not specified
                // { name: 'Pentola' },  // Quantity not applicable
                { name: 'Salsa pomodoro', quantity: 300, unit: 'g' },
                { name: 'Concentrato pomodoro', quantity: 10, unit: 'g' },
                { name: 'Aceto bianco', quantity: 60, unit: 'g' },
                { name: 'Burro', quantity: 40, unit: 'g' },
                { name: 'Cipolla', quantity: 100, unit: 'g' },
                { name: 'Senape', quantity: 10, unit: 'g' },
                { name: 'Zucchero di canna', quantity: 100, unit: 'g' },
                { name: 'Sale' },
                { name: 'Pepe', quantity: 'poco' },
                { name: 'Salsa Worchestershire' },
                { name: 'Salsa Tabasco', quantity: 'molto poca' },
                { name: 'Peperoncino in polvere', quantity: 1, unit: 'g' },
            ]}
            instructions={<>
                <Step>Tritare cipolla, far soffriggere in burro a fiamma alta.</Step>
                <Step>Aggiungere aceto, sfumare.</Step>
                <Step>Aggiungere salsa e concentrato pomodoro, zucchero senape.</Step>
                <Step>Cuocere a fuoco basso per 20 min.</Step>
                <Step>(Opzionale) Setacciare salsa.</Step>
                <Step>Aggiungere Tabasco, Worchestershire, sale, pepe.</Step>
                <Step>Mescolare.</Step>
            </>}
            suggestions={<>
                <Suggestion>Perfetta per le grigliate. Su gentile concessione di Sam.</Suggestion>
            </>}
        />
    );
}

export default SalsaBarbeque;
