import {
    CookingTime,
    Suggestion,
    PreparationTime,
    RecipeLayout,
} from "../../../components/recipes";
import { Step, Parallel, ParallelBranch } from "../../../components/flow";

const TITLE = 'Carbonara';
const URL = 'carbonara';

function Carbonara() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={2}
            source='Davide Ponzini'
            addedOn='Marzo 2025'
            times={<>
                <PreparationTime time='5 min' />
                <CookingTime time='10 min' flame='alta' />
            </>}
            ingredients={[
                { name: 'Spaghetti', quantity: 200, unit: 'g' },
                { name: 'Guanciale', quantity: 160, unit: 'g' },
                { name: 'Tuorli', quantity: 3, unit: '' },
                { name: 'Pecorino romano', quantity: 60, unit: 'g' },
                { name: 'Pepe nero', quantity: 'q.b.' },
                { name: 'Schiumarola' },
            ]}
            instructions={<>
                <Parallel>
                    <ParallelBranch>
                        <Step>Far bollire l'acqua.</Step>
                        <Step>Cuocere la pasta.</Step>
                    </ParallelBranch>

                    <ParallelBranch>
                        <Parallel>
                            <ParallelBranch>
                                <Step>Miscelare tuorli con Pecorino e metà pepe, fino a che sono ben addensati.</Step>
                            </ParallelBranch>

                            <ParallelBranch>
                                <Step>Cuocere guanciale.</Step>
                                <Step>Quando è quasi pronto, lasciare raffreddare.</Step>
                            </ParallelBranch>
                        </Parallel>

                        <Parallel>
                            <ParallelBranch>
                                <Step>Unire guanciale ai tuorli e mescolare bene.</Step>
                                <Step>Aggiungere acqua di cottura fino a renderla cremosa.</Step>
                            </ParallelBranch>

                            <ParallelBranch>
                                <Step>Aggiungere l'altra metà di pepe al guanciale.</Step>
                                <Step>Far rosolare fino a quando non è croccante.</Step>
                            </ParallelBranch>
                        </Parallel>
                    </ParallelBranch>
                </Parallel>

                <Step>Quando la pasta è al dente, scolarla e unirla al guanciale.</Step>
                <Step>Mescolare a fiamma spenta.</Step>
                <Step>Quando la pasta si è raffreddata, unirla alle uova e mescolare bene.</Step>
            </>}
            suggestions={<>
                <Suggestion>Attenzione: se si mette la pasta appena scolata sulle uova, diventano una frittata!</Suggestion>
            </>}
        />
    );
}

Carbonara.title = TITLE;
Carbonara.url = URL;

export default Carbonara;
