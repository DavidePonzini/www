import { defineRecipe } from './Util';

import {
    RecipeLayout,
} from '../../../components/recipes';

const TITLE = 'Spezie per patate';

function SpeziePatate() {
    return (
        <RecipeLayout
            title={TITLE}
            source='Supermercato'
            addedOn='2019'
            ingredients={[
                { name: 'Sale' },
                { name: 'Rosmarino' },
                { name: 'Basilico' },
                { name: 'Maggiorana' },
                { name: 'Timo' },
                { name: 'Salvia' },
                { name: 'Ginepro' },
                { name: 'Aglio' },
                { name: 'Alloro' },
                { name: 'Coriandolo' },
                { name: 'Prezzemolo' },
                { name: 'Cipolla' },
            ]}
        />
    );
}

export default defineRecipe(SpeziePatate, TITLE);