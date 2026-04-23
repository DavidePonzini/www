import {
    CookingTime,
    Suggestion,
    PreparationTime,
    RecipeLayout,
} from "../../../components/recipes";
import { Step, Parallel, Branch } from "../../../components/flow";

function Amatriciana() {
    return (
        <RecipeLayout
            title='Amatriciana'
            servings={2}
            source='Internet'
            addedOn='Agosto 2025'
            times={<>
                <CookingTime time='10 min' flame='alta' />
                <CookingTime time='10 min' flame='media' />
            </>}
            ingredients={[
                { name: 'Spaghetti', quantity: 200, unit: 'g' },
                { name: 'Guanciale', quantity: 95, unit: 'g' },
                { name: 'Salsa di pomodoro', quantity: 250, unit: 'g' },
                { name: 'Vino bianco', quantity: 32, unit: 'ml' },
                { name: 'Pecorino romano', quantity: 50, unit: 'g' },
                { name: 'Peperoncino', quantity: 'poco' },
                { name: 'Sale', quantity: 'q.b.' },
                { name: 'Schiumarola' },
            ]}
            instructions={<>
                <Parallel>
                    <Branch>
                        <Step>Far bollire l'acqua e cuocere la pasta normalmente.</Step>
                    </Branch>

                    <Branch>
                        <Step>Far rosolare il guanciale in padella.</Step>
                        <Step>Sfumare col vino.</Step>
                        <Step>Aggiungere la salsa di pomodoro ed il peperoncino.</Step>
                        <Step>Cuocere a fiamma media per 10 min.</Step>
                    </Branch>
                </Parallel>

                <Step>Scolare la pasta e unirla alla salsa.</Step>
                <Step>Aggiungere pecorino e mescolare bene.</Step>
            </>}
            suggestions={<>
                <Suggestion>Attenzione a quando si sfuma col vino, non può evaporare completamente in quanto è presente anche il grasso.</Suggestion>
            </>}
        />
    );
}

export default Amatriciana;
