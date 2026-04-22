import {
    BakingTimeBottom,
    BakingTimeFan,
    BakingTimeTop,
    BakingTimeTopbottom,
    CookingTime,
    Suggestion,
    PreparationTime,
    PreparationWait,
    RecipeLayout,
} from "../../../components/recipes";
import { Step, Parallel, Branch } from "../../../components/flow";

function Carbonara() {
    return (
        <RecipeLayout
            title='Carbonara'
            servings={2}
            source='Davide Ponzini'
            addedOn='2025-5-2'
            times={<>
                <PreparationTime time='00:10:00' />
                <CookingTime time='00:08:00' flame='media' />
                <BakingTimeFan time='00:02:00' temperature='180'/>
                <BakingTimeBottom time='00:02:00' temperature='180'/>
                <BakingTimeTop time='00:02:00' temperature='180'/>
                <BakingTimeTopbottom time='00:02:00' temperature='180'/>
                <PreparationWait time='00:02:00' description='Frigo'/>
            </>}
            ingredients={[
                { name: 'Spaghetti', quantity: 200, unit: 'g' },
                { name: 'Guanciale', quantity: 100, unit: 'g' },
                { name: 'Tuorli d\'uovo', quantity: 2, unit: '' },
                { name: 'Pecorino Romano grattugiato', quantity: 50, unit: 'g' },
                { name: 'Pepe nero macinato fresco', quantity: 'q.b.' },
                { name: 'Sale', quantity: 'q.b.' },
            ]}
            instructions={<>
                <Step>
                    <a href='https://example.com'>step 1</a>
                </Step>

                <Step>
                    step 2 with some longer content that can wrap on smaller screens.
                </Step>

                <Parallel>
                    <Branch>
                        <Step>step 3a1</Step>
                        <Step>step 3a2</Step>
                    </Branch>

                    <Branch>
                        <Step>step 3b1</Step>
                        <Step>step 3b2</Step>
                        <Step>
                            step 3b3 with a bit more text so you can test variable height
                            and wrapping behaviour.
                        </Step>
                    </Branch>
                </Parallel>

                <Step>step 4</Step>
            </>
            }
            suggestions={<>
                <Suggestion>Usare guanciale autentico per il miglior sapore.</Suggestion>
                <Suggestion>Non usare panna; la cremosità deve venire dalle uova e dal formaggio.</Suggestion>
                <Suggestion>Servire subito per gustare al meglio la carbonara.</Suggestion>
            </>}
            notes='<3'
        />
    );
}

export default Carbonara;
