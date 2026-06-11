import {
    CookingTime,
    Suggestion,
    PreparationTime,
    PreparationWait,
    RecipeLayout,
} from "../../../components/recipes";
import { Step, Parallel, ParallelBranch } from "../../../components/flow";
import { InlineMath } from 'react-katex';


const TITLE = 'Riso con pollo - Jawad';
const URL = 'riso-jawad';

function RisoJawad() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={1}
            source='Jawad Shurrush'
            addedOn='Febbraio 2024'
            times={<>
                <PreparationTime time='2 min' />
                <CookingTime time='5 min' flame='alta' />
                <CookingTime time='10 min' flame='bassa' />
                <PreparationWait time='10 min' />
            </>}
            ingredients={[
                { name: 'Petto di pollo', quantity: 200, unit: 'g' },
                { name: 'Riso Basmati', quantity: 60, unit: 'g' },
                { name: 'Pastina', quantity: 30, unit: 'g' },
                { name: 'Olio', quantity: 15, unit: 'g' },
                { name: 'Acqua', quantity: 180, unit: 'g' },
                { name: 'Sale', quantity: 'q.b.' },
                { name: 'Pepe nero', quantity: 'q.b.' },
                { name: 'Pepe inglese', quantity: 'q.b.' },
                { name: 'Cannella', quantity: 'q.b.' },
                { name: 'Noce moscata', quantity: 'q.b.' },
            ]}
            instructions={<>
                <Parallel>
                    <ParallelBranch>
                        <Step>Mettere in una pentola antiaderente olio e pastina.</Step>
                        <Step>Far rosolare fino a che la pasta diventa ben dorata.</Step>
                        <Step>Aggiungere riso e far scottare.</Step>
                        <Step>Aggiungere acqua e spezie, far bollire l'acqua.</Step>
                        <Step>Cuocere col coperchio (o piatto, deve andare un po' sotto pressione).</Step>
                        <Step>Lasciare riposare.</Step>
                        <Step>Mescolare delicatamente dal basso verso l'alto.</Step>
                    </ParallelBranch>

                    <ParallelBranch>
                        <Step>Tagliare cipolle e pollo a cubetti.</Step>
                        <Step>Mettere olio in una padella antiaderente e soffriggere.</Step>
                        <Step>Quando il pollo ha cambiato colore, aggiungere sale e spezie.</Step>
                        <Step>Cuocere fino a che non è cotto.</Step>
                    </ParallelBranch>
                </Parallel>

                <Step>Unire e mescolare</Step>
            </>}
            suggestions={<>
                <Suggestion><InlineMath math={'Acqua = 2 \\cdot Riso + Pasta'} /></Suggestion>
            </>}
        />
    );
}

RisoJawad.title = TITLE;
RisoJawad.url = URL;

export default RisoJawad;
