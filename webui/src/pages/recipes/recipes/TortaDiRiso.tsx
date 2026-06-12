import { defineRecipe } from './Util';

import {
    CookingTime,
    PreparationTime,
    RecipeLayout,
    BakingTimeFan,
} from '../../../components/recipes';
import { Step, Parallel, ParallelBranch } from '../../../components/flow';

const TITLE = 'Torta di riso';

function TortaDiRiso() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={5}
            source='IPSEOA Marco Polo'
            addedOn='~ 2022'
            times={<>
                <PreparationTime time='1 h' />
                <CookingTime time='~ 10 min' flame='medio-bassa' description='Risotto' />
                <PreparationTime time='15 min' />
                <BakingTimeFan time='40-45 min' temperature={180} />
            </>}
            ingredients={[
                { name: 'Farina "0"', quantity: 150, unit: 'g', category: 'Pasta matta' },
                { name: 'Acqua', quantity: 75, unit: 'g', category: 'Pasta matta' },
                { name: 'Olio d\'oliva', quantity: 15, unit: 'g', category: 'Pasta matta' },
                { name: 'Sale fino', quantity: 4, unit: 'g', category: 'Pasta matta' },

                { name: 'Riso', quantity: 200, unit: 'g', category: 'Risotto' },
                { name: 'Cipolla bianca', quantity: 25, unit: 'g', category: 'Risotto' },
                { name: 'Funghi porcini secchi', quantity: 15, unit: 'g', category: 'Risotto' },
                { name: 'Olio d\'oliva', quantity: 'q.b.', category: 'Risotto' },
                { name: 'Sale', quantity: 'q.b.', category: 'Risotto' },
                { name: 'Brodo vegetale', quantity: 'q.b.', category: 'Risotto' },
                { name: 'Vino bianco secco', quantity: 50, unit: 'ml', category: 'Risotto' },

                { name: 'Prescinsêua', quantity: 100, unit: 'g', category: 'Farcia' },
                // { name: 'Ricotta fresca vaccina', quantity: 50, unit: 'g', category: 'Farcia' },
                { name: 'Uova', quantity: 2, category: 'Farcia' },
                { name: 'Parmigiano Reggiano', quantity: 50, unit: 'g', category: 'Farcia' },
                { name: 'Burro', quantity: 50, unit: 'g', category: 'Farcia' },
                { name: 'Maggiorana fresca', quantity: 'q.b.', category: 'Farcia' },
                { name: 'Parmigiano Reggiano', quantity: 'q.b.', category: 'Farcia' },

                { name: 'Olio d\'oliva', quantity: 'q.b.', category: 'SE viene richiusa' },

                { name: 'Parmigiano Reggiano', quantity: 'q.b.', category: 'SE rimane aperta' },
                { name: 'Uova', quantity: 'q.b.', category: 'SE rimane aperta' },
            ]}
            instructions={<>
                <Parallel>
                    <ParallelBranch>
                        <Step>Mettere i funghi secchi ad idratare.</Step>
                    </ParallelBranch>

                    <ParallelBranch>
                        <Step>Preparare la pasta matta e metterla a riposare in frigo.</Step>
                    </ParallelBranch>

                    <ParallelBranch>
                        <Parallel>
                            <ParallelBranch>
                                <Step>Preparare il brodo.</Step>
                            </ParallelBranch>
                            
                            <ParallelBranch>
                                <Step>Tritare (separatamente) cipolla, maggiorana e funghi secchi.</Step>
                            </ParallelBranch>

                            <ParallelBranch>
                                <Step>Preparare un risotto semplice <em>al dente</em>.</Step>
                            </ParallelBranch>
                        </Parallel>

                        <Step>Far raffreddare un po' il risotto, successivamente unire ingredienti per la farcia.</Step>
                    </ParallelBranch>
                </Parallel>

                <Step>Stendere la pasta matta su teglia con olio.</Step>
                <Step>Stendere uno strato di 3 cm di risotto, cospargere di Parmigiano.</Step>
                <Step>Coprire con pasta matta e spennellare con uno strato di olio <strong>OPPURE</strong> lasciare scoperto e spennellare di uova e cospargere di Parmigiano.</Step>
                <Step>Cuocere in forno.</Step>
            </>}
        />
    );
}

export default defineRecipe(TortaDiRiso, TITLE);
