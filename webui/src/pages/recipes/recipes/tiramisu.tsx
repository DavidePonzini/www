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

function Tiramisu() {
    return (
        <RecipeLayout
            title='Tiramisù'
            servings={8}
            source='Internet'
            addedOn='Gennaio 2025'
            times={<>
                <PreparationTime time='1 h' />
                <PreparationWait time='4+ h' />
            </>}
            ingredients={[
                { name: 'Mascarpone', quantity: 1000, unit: 'g' },
                { name: 'Zucchero', quantity: 160, unit: 'g' },
                { name: 'Uova', quantity: 7 },
                { name: 'Savoiardi', quantity: 300, unit: 'g' },
                { name: 'Caffè', quantity: 12, unit: 'persone' },
                { name: 'Cacao in polvere', quantity: 'q.b.' },
            ]}
            instructions={<>
                <Parallel>
                    <ParallelBranch>
                        <Step>Preparare il caffè e farlo raffreddare.</Step>
                    </ParallelBranch>

                    <ParallelBranch>
                        <Step>Montare tuorli con metà dose di zucchero.</Step>
                        <Step>Aggiungere mascarpone e montare bene.</Step>
                        <Step>Pulire le fruste per bene e montare albumi a neve ferma con metà dose di zucchero.</Step>
                        <Step>Unire una parte di albumi montati a neve con il resto. Mescolare energicamente.</Step>
                        <Step>Unire rimanenza di albumi, mescolare dal basso verso l'alto.</Step>
                    </ParallelBranch>
                </Parallel>

                <Step>Versare uno strato iniziale di crema sul fondo del contenitore.</Step>
                <Step>Ricoprire con savoiardi pucciati nel caffè.</Step>
                <Step>Coprire bene con uno strato di crema.</Step>
                <Step>Ripetere fino a che il contenitore non è quasi pieno.</Step>
                <Step>Ricoprire con uno strato finale, un po' più spesso, di crema.</Step>
                <Step>Spolverare con cacao.</Step>
                <Step>Far riposare in frigo.</Step>
            </>}
            suggestions={<>
                <Suggestion>Quando si montano le uova, aggiungere lo zucchero solo quando sono già ben amalgamate.</Suggestion>
            </>}
        />
    );
}

export default Tiramisu;
