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

const TITLE = 'SacherTorte';
const URL = 'sacher';

function Sacher() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={8}
            source='Internet'
            addedOn='~ 2019'
            times={<>
                <PreparationTime time='1 h' />
                <BakingTimeTopbottom time='35-40 min' temperature={170} />
            </>}
            ingredients={[
                { name: 'Cioccolato fondente', quantity: 75, unit: 'g' },
                { name: 'Albumi', quantity: 90, unit: 'g' },
                { name: 'Tuorli', quantity: 60, unit: 'g' },
                { name: 'Burro ammorbidito', quantity: 65, unit: 'g' },
                { name: 'Farina 00', quantity: 65, unit: 'g' },
                { name: 'Zucchero a velo', quantity: 20, unit: 'g' },
                { name: 'Zucchero', quantity: 90, unit: 'g' },
                { name: 'Vaniglia', quantity: 3, unit: 'g' },
                { name: 'Sale fino', quantity: 1, unit: 'pizzico' },
                { name: 'Marmellata albicocche', quantity: 200, unit: 'g', category: 'Farcitura' },
                { name: 'Cioccolato fondente', quantity: 185, unit: 'g', category: 'Copertura' },
                { name: 'Panna fresca', quantity: 125, unit: 'g', category: 'Copertura' },
            ]}
            instructions={<>
                <Parallel>
                    <ParallelBranch>
                        <Step>Fondere cioccolato.</Step>
                    </ParallelBranch>

                    <ParallelBranch>
                        <Step>Setacciare farina.</Step>
                    </ParallelBranch>

                    <ParallelBranch>
                        <Step>Mescolare burro, zucchero a velo, vaniglia e sale.</Step>
                        <Step>Aggiungere tuorli, mescolare fino a che è ben montato (8-10 min).</Step>
                    </ParallelBranch>
                </Parallel>

                <Step>Controllare che il cioccolato sia tra 45° e 55°.</Step>
                <Step>Aggiungere cioccolato, mescolare.</Step>
                <Step>Montare albumi quasi fino a neve (non deve essere neve ferma). Aggiungere lo zucchero piano piano, appena cominciano a montare (non prima o monteranno più a fatica).</Step>
                <Step>Unire albumi al resto, mescolare con spatola.</Step>
                <Step>Aggiungere farina, mescolare.</Step>
                <Step>Imburrare ed infarinare stampo.</Step>
                <Step>Versare composto.</Step>
                <Step>Cuocere in forno a 170° per 35-40 min.</Step>
                <Step>Controllare con stecchino.</Step>

                <Parallel>
                    <ParallelBranch>
                        <Step>Mettere panna sul fuoco.</Step>
                        <Step>Quando bolle aggiungere cioccolato spezzettato.</Step>
                        <Step>Girare fino a che è ben amalgamato.</Step>
                        <Step>Far raffreddare fino a 40°.</Step>
                    </ParallelBranch>

                    <ParallelBranch>
                        <Step>Tagliare torta a metà con coltello a lama seghettata.</Step>
                        <Step>Spalmare con spatola marmellata all'interno.</Step>
                        <Step>Spalmare con spatola marmellata su superficie (e bordi).</Step>
                    </ParallelBranch>
                </Parallel>

                <Step>Ricoprire torta.</Step>
                <Step>Mettere in frigo per almeno 20 min.</Step>
            </>}
            suggestions={<>
                <Suggestion>Mescolare la ganache con minipimer per eliminare i grumi.</Suggestion>
                <Suggestion>Non esagerare con la marmellata.</Suggestion>
            </>}
            notes='CompleManu!'
        />
    );
}

Sacher.title = TITLE;
Sacher.url = URL;

export default Sacher;

