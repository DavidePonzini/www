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

const TITLE = 'Brasato';
const URL = 'brasato';

function Brasato() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={4}
            source='Internet'
            addedOn='~ 2022'
            times={<>
                <PreparationTime time='15 min' />
                <PreparationWait time='12 h' description='Riposo in frigo' />
                <PreparationTime time='30 min' />
                <CookingTime time='2 h 30 min' flame='bassa' />
            </>}
            ingredients={[
                { name: 'Manzo (cappello del prete)', quantity: 1, unit: 'kg', category: 'Marinatura' },
                { name: 'Barolo', quantity: 750, unit: 'ml', category: 'Marinatura' },
                { name: 'Carote', quantity: 160, unit: 'g', category: 'Marinatura' },
                { name: 'Cipolle dorate', quantity: 100, unit: 'g', category: 'Marinatura' },
                { name: 'Sedano', quantity: 100, unit: 'g', category: 'Marinatura' },
                { name: 'Aglio', quantity: 1, unit: 'spicchio', category: 'Marinatura' },
                
                { name: 'Garza sterile', category: 'Sacchettino aromatico' },
                { name: 'Spago', category: 'Sacchettino aromatico' },
                { name: 'Pepe nero', quantity: 4, unit: 'chicchi', category: 'Sacchettino aromatico' },
                { name: 'Chiodi di garofano', quantity: 3, category: 'Sacchettino aromatico' },
                { name: 'Cannella', quantity: 1, unit: 'stecca', category: 'Sacchettino aromatico' },
                
                { name: 'Rosmarino', quantity: 1, unit: 'rametto', category: 'Altre spezie' },
                { name: 'Alloro', quantity: 2, unit: 'foglie', category: 'Altre spezie' },
                
                { name: 'Burro', quantity: 20, unit: 'g', category: 'Cottura' },
                { name: 'Olio', quantity: 50, unit: 'g', category: 'Cottura' },
                { name: 'Sale', category: 'Cottura', unit: 'q.b.' },
            ]}
            instructions={<>
                <Step>Preparare sacchettino aromatico.</Step>
                <Step>Mettere in una ciotola abbastanza grande carne.</Step>
                <Step>Aggiungere spezie.</Step>
                <Step>Pulire carote, cipolle, sedano e aglio. Aggiungerli alla carne.</Step>
                <Step>Coprire col vino.</Step>
                <Step>Coprire con pellicola, lasciare riposare una notte in frigo.</Step>
                <Step>Rimuovere la carne, asciugarla con della carta.</Step>
                <Step>Far scioglere olio e burro in una pentola antiaderente.</Step>
                <Step>Rosolare la carne da ogni lato a fiamma vicace, fino a che non forma un po' di crosticina.</Step>
                <Step>Aggiungere le verdure e tutte le spezie, precedentemente scolate.</Step>
                <Step>Cuocere a fiamma bassa per 15 minuti.</Step>
                <Step>Aggiungere vino, cuocere a fiamma bassa per 1 ora con coperchio.</Step>
                <Step>Girare la carne, lasciare cuocere per 1 ora.</Step>
                <Step>Rimuovere la carne.</Step>
                <Step>Eliminare gli aromi.</Step>
                <Step>Frullare con frullatore ad immersione le verdure ed il fondo di cottura.</Step>
                <Step>Affettare la carne, servire con salsa.</Step>
            </>}
        />
    );
}

Brasato.title = TITLE;
Brasato.url = URL;

export default Brasato;

