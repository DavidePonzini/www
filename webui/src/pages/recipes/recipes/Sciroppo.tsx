import {
    CookingTime,
    PreparationWait,
    RecipeLayout,
} from "../../../components/recipes";
import { Step } from "../../../components/flow";

function Sciroppo() {
    return (
        <RecipeLayout
            title='Sciroppo 62%'
            servings={1}
            servingsUnitSingular='litro'
            servingsUnitPlural='litri'
            source='Internet'
            addedOn='Marzo 2025'
            times={<>
                <CookingTime time='10 min' flame='media' />
                <PreparationWait time='2 h' />
            </>}
            ingredients={[
                { name: 'Acqua', quantity: 380, unit: 'g' },
                { name: 'Zucchero', quantity: 620, unit: 'g' },
            ]}
            instructions={<>
                <Step>Mettere zucchero e acqua in un pentolino sul fuoco.</Step>
                <Step>Far cuocere e mescolare fino a che non si è sciolto tutto. Attenzione a non fare bollire.</Step>
                <Step>Far raffreddare.</Step>
            </>}
        />
    );
}

export default Sciroppo;
