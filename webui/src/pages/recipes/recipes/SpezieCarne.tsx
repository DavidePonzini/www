import { defineRecipe } from './Util';

import {
    RecipeLayout,
} from '../../../components/recipes';

const TITLE = 'Spezie per carni';
    
function SpezieCarne() {
    return (
        <RecipeLayout
            title={TITLE}
            source='Supermercato'
            addedOn='2019'
            ingredients={[
                { name: 'Sale' },
                { name: 'Rosmarino' },
                { name: 'Origano' },
                { name: 'Pepe' },
                { name: 'Salvia' },
                { name: 'Ginepro' },
                { name: 'Prezzemolo' },
                { name: 'Aglio' },
            ]}
        />
    );
}

export default defineRecipe(SpezieCarne, TITLE);