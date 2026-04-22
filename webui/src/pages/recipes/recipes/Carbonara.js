import RecipeLayout from "../../../components/recipes/RecipeLayout";
import Instruction from "../../../components/recipes/Instruction";
import Note from "../../../components/recipes/Note";
import Step from "../../../components/recipes/Example";
import { createContext, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';


function Carbonara() {
    const FlowContext = createContext(null);

    function useFlow() {
        return useContext(FlowContext);
    }

    return (

        <RecipeLayout
            title='Carbonara'
            servings={2}
            source='Davide Ponzini'
            ingredients={[
                { name: 'Spaghetti', quantity: 200, unit: 'g' },
                { name: 'Guanciale', quantity: 100, unit: 'g' },
                { name: 'Tuorli d\'uovo', quantity: 2, unit: '' },
                { name: 'Pecorino Romano grattugiato', quantity: 50, unit: 'g' },
                { name: 'Pepe nero macinato fresco', quantity: 'q.b.' },
                { name: 'Sale', quantity: 'q.b.' },
            ]}
            instructions={<>
                {/* <Instruction>Cuocere gli spaghetti in abbondante acqua salata fino a quando non sono al dente.</Instruction>
                <Instruction>Nel frattempo, tagliare il guanciale a cubetti o strisce e rosolarlo in una padella fino a quando non diventa croccante.</Instruction>
                <Instruction>In una ciotola, sbattere i tuorli d'uovo con il pecorino grattugiato e una generosa quantità di pepe nero.</Instruction>
                <Instruction>Scolare gli spaghetti, conservando un po' di acqua di cottura.</Instruction>
                <Instruction>Aggiungere gli spaghetti nella padella con il guanciale e mescolare bene.</Instruction>
                <Instruction>Togliere la padella dal fuoco e aggiungere il composto di uova e formaggio, mescolando rapidamente per evitare che le uova si cuociano troppo.</Instruction>
                <Instruction>Se necessario, aggiungere un po' di acqua di cottura degli spaghetti per ottenere una consistenza cremosa.</Instruction>
                <Instruction>Servire immediatamente, guarnendo con ulteriore pecorino e pepe nero a piacere.</Instruction> */}
                <Step />
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