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
import { Link } from "react-router-dom";

function CioccolatiniMou() {
    return (
        <RecipeLayout
            title='Cioccolatini al Mou'
            servings={24}
            servingsUnitSingular='cioccolatino'
            servingsUnitPlural='cioccolatini'
            source='Internet'
            addedOn='Aprile 2019'
            times={<>
                <CookingTime time='5 min' flame='bassa' description='Cioccolato' />
                <PreparationTime time='30 min' description='Rivestimento esterno' />
                <PreparationWait time='20 min' />
                <PreparationTime time='30 min' description='Farcitura' />
                <PreparationWait time='1 h' />
            </>}
            ingredients={[
                // { name: 'Spaghetti', quantity: 200, unit: 'g' },  // Standard format
                // { name: 'Spaghetti', quantity: 200 },  // Standard format, unit is implied
                // { name: 'Spaghetti', quantity: 200, unit: 'g', category: 'Pasta' },  // Standard format with category
                // { name: 'Sale', quantity: 'q.b.' },  // Quantity not specified
                // { name: 'Pentola' },  // Quantity not applicable
                { name: 'Cioccolato fondente 70%', quantity: 300, unit: 'g' },
                { name: 'Caramello Mou', quantity: 120, unit: 'g' },
                { name: 'Stampini per cioccolatini' },
            ]}
            instructions={<>
            <Parallel>
                <ParallelBranch>
                    <Step>Preparare <Link to='../caramello-mou'>Mou</Link>.</Step>
                </ParallelBranch>

                <ParallelBranch>
                    <Step>Far sciogliere cioccolato a bagnomaria.</Step>
                    <Step>Mettere negli stampini cioccolato e spennellare i bordi degli stampini per bene.</Step>
                    <Step>Mettere stampini in frigo per 20 min.</Step>
                </ParallelBranch>

                </Parallel>

                <Step>Aggiungere mou agli stampini, coprire con cioccolato.</Step>
                <Step>Lasciare in frigo per 1 h.</Step>
            </>}
            suggestions={<>
                <Suggestion>Ricoprire per bene i bordi degli stampini, per evitare si formino buchi.</Suggestion>
            </>}
            notes='Spuntino dei 24 CFU.'
        />
    );
}

export default CioccolatiniMou;

