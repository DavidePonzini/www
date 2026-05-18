import {
    CookingTime,
    Suggestion,
    PreparationTime,
    RecipeLayout,
} from "../../../components/recipes";
import { Step, Parallel, Branch } from "../../../components/flow";
import { Link } from "react-router";
import { InlineMath } from "react-katex";

function RisoJawadAglio() {
    return (
        <RecipeLayout
            title='Riso con pollo e aglio - Jawad'
            servings={2}
            source='Jawad Shurrush'
            addedOn='Luglio 2023'
            times={<>
                <PreparationTime time='10 min' />
                <CookingTime time='30 min' flame='alta' />
            </>}
            ingredients={[
                { name: 'Petto di pollo', quantity: 400, unit: 'g' },
                { name: 'Pomodori ciliegini', quantity: 300, unit: 'g' },
                { name: 'Aglio', quantity: 6, unit: 'spicchi' },
                { name: 'Sale', quantity: 'q.b.' },
                { name: 'Olio', quantity: 'q.b.' },
                { name: 'Pepe nero', quantity: 'q.b.' },
                { name: 'Pepe inglese', quantity: 'q.b.' },
                { name: 'Cannella', quantity: 'q.b.' },
                { name: 'Noce moscata', quantity: 'q.b.' },
                { name: 'Paprika dolce', quantity: 'q.b.' },
                { name: 'Peperoncino', quantity: 'q.b.' },
                { name: 'Burro', quantity: 15, unit: 'g' },
                { name: 'Succo di limone', quantity: 1, unit: 'limone' },
            ]}
            instructions={<>
                <Step>Soffriggere pollo nell'olio.</Step>
                <Step>Aggiungere le verdure quando la carne prende colore.</Step>
                <Step>Aggiungere spezie a metà cottura.</Step>
                <Step>Aggiungere aglio a ⅔ della cottura.</Step>
                <Step>Aggiungere burro, far rosolare un attimo.</Step>
                <Step>Aggiungere limone a fine cottura, far rosolare un attimo.</Step>
            </>}
            suggestions={<>
                <Suggestion>Si consiglia di unirlo al <Link to='../riso-jawad'>riso con pastina allo zafferano</Link>.</Suggestion>
            </>}
        />
    );
}

export default RisoJawadAglio;
