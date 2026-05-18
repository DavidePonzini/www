import {
    CookingTime,
    Suggestion,
    PreparationTime,
    RecipeLayout,
} from "../../../components/recipes";
import { Step, Parallel, Branch } from "../../../components/flow";
import { Link } from "react-router";

function RisoJawadFagiolini() {
    return (
        <RecipeLayout
            title='Riso con pollo e fagiolini - Jawad'
            servings={2}
            source='Jawad Shurrush'
            addedOn='Aprile 2024'
            times={<>
                <PreparationTime time='10 min' />
                <CookingTime time='30 min' flame='alta' />
            </>}
            ingredients={[
                { name: 'Petto di pollo', quantity: 300, unit: 'g' },
                { name: 'Fagiolini', quantity: 300, unit: 'g' },
                { name: 'Cipolla', quantity: 100, unit: 'g' },
                { name: 'Concentrato di pomodoro', quantity: 2, unit: 'cucchiai' },
                { name: 'Acqua', quantity: 'q.b.' },
                { name: 'Olio', quantity: 'q.b.' },
                { name: 'Pepe nero', quantity: 'q.b.' },
                { name: 'Pepe inglese', quantity: 'q.b.' },
                { name: 'Cannella', quantity: 'q.b.' },
                { name: 'Noce moscata', quantity: 'q.b.' },
            ]}
            instructions={<>
                <Step>Cuocere il pollo, tagliato a cubetti, con cipolle e spezie.</Step>
                <Step>Aggiungere fagiolini, soffriggere un poco.</Step>
                <Step>Aggiungere acqua e concetrato di pomodoro, regolare sale.</Step>
                <Step>Lasciare cuocere fino a che la salsa non si è asciugata.</Step>
            </>}
            suggestions={<>
                <Suggestion>Si consiglia di unirlo al <Link to='../riso-jawad'>riso con pastina</Link>.</Suggestion>
            </>}
        />
    );
}

export default RisoJawadFagiolini;
