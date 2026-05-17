import {
    CookingTime,
    Suggestion,
    PreparationWait,
    RecipeLayout,
} from "../../../components/recipes";
import { Step } from "../../../components/flow";
import { Link } from "react-router-dom";

function SciroppoCannella() {
    return (
        <RecipeLayout
            title='Sciroppo alla cannella'
            servings={1}
            servingsUnitSingular='litro'
            servingsUnitPlural='litri'
            source='Internet'
            addedOn='17 Maggio 2026'
            times={<>
                <CookingTime time='10 min' flame='media' />
                <PreparationWait time='2 h' />
            </>}
            ingredients={[
                { name: 'Acqua', quantity: 300, unit: 'g' },
                { name: 'Cannella in stecche', quantity: 33, unit: 'g' },
                { name: 'Chiodi di garofano', quantity: 5 },
                { name: 'Zenzero', quantity: 15, unit: 'g' },
                { name: 'Zucchero', quantity: 'q.b. (in base all\'acqua rimasta)' },
            ]}
            instructions={<>
                <Step>Sbucciare zenzero e tagliarlo a fette sottili.</Step>
                <Step>Mettere acqua, zenzero, cannella e chiodi di garofano in un pentolino sul fuoco.</Step>
                <Step>Far bollire per 10 minuti, col coperchio.</Step>
                <Step>Scolare e rimuovere le spezie.</Step>
                <Step>Pesare l'acqua rimasta e aggiungere zucchero di conseguenza (<Link to='../sciroppo'>Sciroppo 62%</Link>).</Step>
            </>}
        />
    );
}

export default SciroppoCannella;
