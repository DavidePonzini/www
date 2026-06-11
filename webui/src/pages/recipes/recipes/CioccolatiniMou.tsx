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

import CaramelloMou from "./CaramelloMou";

const TITLE = 'Cioccolatini al Mou';
const URL = 'cioccolatini-mou';

function CioccolatiniMou() {
    return (
        <RecipeLayout
            title={TITLE}
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
                { name: 'Cioccolato fondente 70%', quantity: 300, unit: 'g' },
                { name: 'Caramello Mou', quantity: 120, unit: 'g' },
                { name: 'Stampini per cioccolatini' },
            ]}
            instructions={<>
            <Parallel>
                <ParallelBranch>
                    <Step>Preparare <Link to={`../${CaramelloMou.url}`}>Mou</Link>.</Step>
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

CioccolatiniMou.title = TITLE;
CioccolatiniMou.url = URL;

export default CioccolatiniMou;

