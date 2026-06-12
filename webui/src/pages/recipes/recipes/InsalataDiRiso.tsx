import { defineRecipe } from './Util';

import {
    CookingTime,
    PreparationTime,
    RecipeLayout,
    PreparationWait,
} from '../../../components/recipes';
import { Step, Parallel, ParallelBranch } from '../../../components/flow';

const TITLE = 'Insalata di Riso';

function InsalataDiRiso() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={6}
            source='Internet (modificata)'
            addedOn='Luglio 2023'
            times={<>
                <PreparationTime time='2 h' />
                <CookingTime time='3 min' flame='alta'>Piselli</CookingTime>
                <CookingTime time='15 min' flame='media'>Riso</CookingTime>
                <CookingTime time='8 min' flame='alta'>Uova</CookingTime>
                <PreparationWait time='2 h+'>Frigorifero</PreparationWait>
            </>}
            ingredients={[
                { name: 'Riso Arborio', quantity: 300, unit: 'g' },
                { name: 'Pomodorini', quantity: 150, unit: 'g' },
                { name: 'Prosciutto cotto a cubetti', quantity: 100, unit: 'g' },
                { name: 'Peperoni rossi', quantity: 75, unit: 'g' },
                { name: 'Peperoni gialli', quantity: 75, unit: 'g' },
                { name: 'Olive denocciolate', quantity: 80, unit: 'g' },
                { name: "Tonno sott'olio sgocciolato", quantity: 200, unit: 'g' },
                { name: 'Formaggio', quantity: 150, unit: 'g' },
                { name: 'Piselli', quantity: 80, unit: 'g' },
                { name: 'Uova sode', quantity: 3 },
                { name: 'Mais', quantity: 1, unit: 'scatoletta' },
                { name: 'Maionese (tonnata)', quantity: 200, unit: 'g' },
                { name: 'Sale', quantity: 'q.b.' },
            ]}
            instructions={<>
                <Parallel>
                    <ParallelBranch>
                        <Step>Far bollire l'acqua.</Step>
                        <Step>Far cuocere i piselli per 3 min.</Step>
                        <Step>Scolare i piselli e lasciarli raffreddare.</Step>
                    </ParallelBranch>
                    <ParallelBranch>
                        <Step>Cuocere il riso al dente.</Step>
                        <Step>Scolare il riso e lasciarlo raffreddare.</Step>
                    </ParallelBranch>
                    <ParallelBranch>
                        <Step>Preparare le uova sode.</Step>
                    </ParallelBranch>
                </Parallel>
                <Step>Tagliare verdure e formaggio a cubetti, metterli in una ciotola grande.</Step>
                <Step>Una volta raffreddati, unire i piselli.</Step>
                <Step>Aggiungere maionese e mescolare.</Step>
                <Step>Aggiungere il riso e mescolare.</Step>
                <Step>Aggiustare di sale se necessario.</Step>
                <Step>Aggiungere le uova sode tagliate a dischetti, mescolare delicatamente.</Step>
                <Step>Far riposare in frigorifero.</Step>
            </>}
        />
    );
}

export default defineRecipe(InsalataDiRiso, TITLE);
