import {
    CookingTime,
    PreparationWait,
    RecipeLayout,
} from "../../../components/recipes";
import { Step } from "../../../components/flow";

const TITLE = 'Salsa Tahina';
const URL = 'salsa-tahina';

function SalsaTahina() {
    return (
        <RecipeLayout
            title={TITLE}
            source='Jawad Shurrush'
            addedOn='15 Luglio 2023'
            ingredients={[
                { name: 'Salsa Tahini', quantity: 250, unit: 'g' },
                { name: 'Succo di limone', quantity: 1, unit: 'limone' },
                { name: 'Sale', quantity: 'q.b.' },
                { name: 'Acqua', quantity: 'q.b.' },
                { name: 'Prezzemolo', quantity: 'q.b.' },
                { name: 'Aglio', quantity: 'q.b.' },
                { name: 'Pomodorini', quantity: 'q.b.' },
            ]}

            instructions={<>
                <Step>Mettere salsa Tahini, eventuali spezie opzionali, succo di limone ed acqua.</Step>
                <Step>Mescolare e correggere fino a raggiungimento di una consistenza ottimale.</Step>
            </>}
        />
    );
}

SalsaTahina.title = TITLE;
SalsaTahina.url = URL;

export default SalsaTahina;
