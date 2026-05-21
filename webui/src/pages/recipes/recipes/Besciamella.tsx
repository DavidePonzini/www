import {
    CookingTime,
    Suggestion,
    PreparationTime,
    RecipeLayout,
} from "../../../components/recipes";
import { Step, Parallel, ParallelBranch } from "../../../components/flow";

function Besciamella() {
    return (
        <RecipeLayout
            title='Besciamella'
            servings={500}
            servingsUnitSingular='g di carne per ragù'
            servingsUnitPlural='g di carne per ragù'
            source='Abbate Maria Luisa'
            addedOn='2019'
            times={<>
                <PreparationTime time='5 min' />
                <CookingTime time='10-20 min' flame='bassa+' />
            </>}
            ingredients={[
                { name: 'Latte', quantity: 1, unit: 'l' },
                { name: 'Farina', quantity: 'q.b.' },
                { name: 'Burro', quantity: 60, unit: 'g' },
                { name: 'Sale', quantity: 1, unit: 'manciata' },
                { name: 'Noce moscata', quantity: 1, unit: 'cucchiaio raso' },
            ]}
            instructions={<>
                <Step>Bollire latte con burro, sale, noce moscata.</Step>
                <Step>Quando il latte è caldo ed il burro sciolto, mettere farina (setacciandola).</Step>
                <Step>Mescolare man mano con una frusta.</Step>
                <Step>Continuare a miscelare fino a che è tiepida, se no si formano grumi.</Step>
            </>}
            suggestions={<>
                <Suggestion>Usare una pentola <u>non</u> antiaderente.</Suggestion>
                <Suggestion>Se sta vendendo troppo densa, aggiungere latte.</Suggestion>
                <Suggestion>Mescolare in maniera casuale, non in un solo verso.</Suggestion>
            </>}
        />
    );
}

export default Besciamella;
