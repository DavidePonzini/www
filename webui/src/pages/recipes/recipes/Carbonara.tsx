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
            addedOn='Marzo 2025'
            times={<>
                <PreparationTime time='00:05:00' />
                <CookingTime time='00:10:00' flame='alta' />
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
                    <Branch>
                        <Step>Far bollire l'acqua.</Step>
                        <Step>Cuocere la pasta.</Step>
                    </Branch>

                    <Branch>
                        <Parallel>
                            <Branch>
                                <Step>Miscelare tuorli con Pecorino e metà pepe, fino a che sono ben addensati.</Step>
                            </Branch>

                            <Branch>
                                <Step>Cuocere guanciale.</Step>
                                <Step>Quando è quasi pronto, lasciare raffreddare.</Step>
                            </Branch>
                        </Parallel>

                        <Parallel>
                            <Branch>
                                <Step>Unire guanciale ai tuorli e mescolare bene.</Step>
                                <Step>Aggiungere acqua di cottura fino a renderla cremosa.</Step>
                            </Branch>

                            <Branch>
                                <Step>Aggiungere l'altra metà di pepe al guanciale.</Step>
                                <Step>Far rosolare fino a quando non è croccante.</Step>
                            </Branch>
                        </Parallel>
                    </Branch>
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

export default Carbonara;
