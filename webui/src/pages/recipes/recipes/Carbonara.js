import RecipeLayout from "../../../components/recipes/RecipeLayout";
import Note from "../../../components/recipes/Note";
import { CookingTime, PreparationTime, PreparationWait, BakingTimeFan, BakingTimeBottom, BakingTimeTop, BakingTimeTopbottom } from "../../../components/recipes/RecipeTime";
import { Step, Parallel, Branch } from "../../../components/flow";

function Carbonara() {
    return (
        <RecipeLayout
            title='Carbonara'
            servings={2}
            source='Davide Ponzini'
            addedOn='22 aprile 2026'
            times={<>
                <PreparationTime time='10 min' />
                <CookingTime time='8 min' flame='media' />
                <BakingTimeFan time='2 min' temperature='180'/>
                <BakingTimeBottom time='2 min' temperature='180'/>
                <BakingTimeTop time='2 min' temperature='180'/>
                <BakingTimeTopbottom time='2 min' temperature='180'/>
                <PreparationWait time='2 min' description='Frigo'/>
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
            notes={<>
                <Note>Usare guanciale autentico per il miglior sapore.</Note>
                <Note>Non usare panna; la cremosità deve venire dalle uova e dal formaggio.</Note>
                <Note>Servire subito per gustare al meglio la carbonara.</Note>
            </>}
            remark='<3'
        />
    );
}

export default Carbonara;
