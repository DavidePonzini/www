import { defineRecipe } from './Util';

import {
    PreparationTime,
    RecipeLayout,
    BakingTimeTopbottom,
    PreparationWait,
} from '../../../components/recipes';
import { Step } from '../../../components/flow';

import Pisto from './Pisto';

const TITLE = 'Mostaccioli napoletani';

function Mostaccioli() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={20}
            servingsUnitSingular='pezzo'
            servingsUnitPlural='pezzi'
            source='Internet'
            addedOn='Dicembre 2024'
            times={<>
                <PreparationTime time='10 min' />
                <PreparationWait time='1 h'>Frigorifero</PreparationWait>
                <PreparationTime time='15 min' />
                <BakingTimeTopbottom time='18 min' temperature={180} />
                <PreparationTime time='15 min'>Glassa, sopra e lati</PreparationTime>
                <PreparationWait time='10 min'>Glassa, sopra e lati</PreparationWait>
                <PreparationTime time='5 min'>Glassa, sotto</PreparationTime>
                <PreparationWait time='1 h'>Glassa</PreparationWait>
            </>}
            ingredients={[
                { name: 'Farina \'00', quantity: 500, unit: 'g' },
                { name: 'Zucchero', quantity: 300, unit: 'g' },
                { name: 'Granella di mandorle', quantity: 150, unit: 'g' },
                { name: 'Acqua', quantity: 250, unit: 'g' },
                { name: 'Cacao amaro in polvere', quantity: 30, unit: 'g' },
                { name: 'Scorza d\'arancia', quantity: 1, unit: 'arancia' },
                { name: 'Pisto', quantity: 5, unit: 'g', url: Pisto.url },
                { name: 'Ammoniaca per dolci', quantity: 3, unit: 'g' },

                { name: 'Cioccolato fondente', quantity: 1, unit: 'kg', category: 'Copertura' },

                { name: 'Carta forno', category: 'Strumenti' },
                { name: 'Mattarello', category: 'Strumenti' },
                { name: 'Gratella per dolci', category: 'Strumenti' },
            ]}
            instructions={<>
                <Step>Mescolare bene farina, granella, zucchero, cacao (setacciato), pisto, ammoniaca e scorza d'arancia.</Step>
                <Step>Aggiungere acqua ed impastare.</Step>
                <Step>Lasciare riposare il panetto in frigo, avvolto nella carta forno.</Step>
                <Step>Stendere l'impasto, lasciandolo spesso 7-8 mm.</Step>
                <Step>Ritagliare le forme dei biscotti.</Step>
                <Step>Cuocere in forno.</Step>
                <Step>Far sciogliere cioccolato, glassare biscotti sopra e dai lati.</Step>
                <Step>Far asciugare cioccolato, glassare la parte sotto.</Step>
                <Step>Far asciugare bene tutta la glassa.</Step>
            </>}
            suggestions={<>
            </>}
            notes=''
        />
    );
}

export default defineRecipe(Mostaccioli, TITLE);