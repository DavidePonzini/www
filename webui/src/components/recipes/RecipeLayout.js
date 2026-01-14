import { useSearchParams } from 'react-router-dom';

import EditableValue from './EditableValue';
import Source from './Source';
import Servings from './Servings';



import SectionBackground from '../SectionBackground';

function RecipeLayout({
    title,
    servings = 1,
    servingsUnitSingular = 'porzione',
    servingsUnitPlural = 'porzioni',
    source,
    ingredients = [],
    instructions = null,
    notes = null,
    remark = null,

}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const scale = Number(searchParams.get('scale') ?? 1);

    function formatQuantity(quantity) {
        if (isNaN(scale) || scale < 0)
            return '';

        if (quantity === undefined || quantity === null)
            return quantity;
        if (typeof quantity !== 'number' || Number.isNaN(quantity))
            return quantity;

        const scaled = quantity * scale;

        if (Math.floor(scaled * 100) % 100 === 0) {
            return Math.floor(scaled);
        }

        return Math.round(scaled * 100) / 100;
    }

    function onQuantityChange(idx, newQuantity) {

        if (isNaN(newQuantity) || newQuantity < 0) {
            setSearchParams(prev => {
                const next = new URLSearchParams(prev);
                next.set('scale', '-1');
                return next;
            }, { replace: true });
        }

        const newScale = newQuantity / ingredients[idx].quantity;

        setSearchParams(prev => {
            const next = new URLSearchParams(prev);
            next.set('scale', String(newScale));
            return next;
        }, { replace: true });
    }

    function onServingsChange(newServings) {
        if (isNaN(newServings) || newServings < 0) {
            setSearchParams(prev => {
                const next = new URLSearchParams(prev);
                next.set('scale', '-1');
                return next;
            }, { replace: true });
        }

        const newScale = newServings / servings;

        setSearchParams(prev => {
            const next = new URLSearchParams(prev);
            next.set('scale', String(newScale));
            return next;
        }, { replace: true });
    }

    return (
        <SectionBackground img={null}>
            <h2>{title}</h2>

            {/* Header */}
            <div className='row mb-4'>
                <div className='col-lg-6'>
                    <Servings>
                        <EditableValue
                            onChange={onServingsChange}
                        >
                            {formatQuantity(servings)}
                        </EditableValue>
                        
                        {formatQuantity(servings) === 1 ? servingsUnitSingular : servingsUnitPlural}
                    </Servings>
                </div>

                {source && (
                    <div className='col-lg-6 text-lg-end'>
                        <Source>{source}</Source>
                    </div>
                )}
        </div>

            {/* Preparation + Ingredients */ }
    <div className='row'>
        {instructions && (
            <div className='col-lg-6 order-2 order-lg-1'>
                <h3>Preparazione</h3>

                <ol>
                    {instructions}
                </ol>
            </div>
        )}

        {ingredients && (
            <div className='col-lg-6 order-1 order-lg-2'>
                <h3>Ingredienti</h3>

                <table>
                    <tbody>
                        {ingredients.map((ingredient, index) => (
                            <tr key={index}>
                                <td style={{ paddingRight: '1rem', textAlign: 'right', whiteSpace: 'nowrap' }}>
                                    {ingredient.quantity === undefined ?
                                        '—' :
                                        <EditableValue
                                            onChange={newQuantity => onQuantityChange(index, parseFloat(newQuantity))}
                                        >
                                            {formatQuantity(ingredient.quantity)}
                                        </EditableValue>
                                    }
                                    {` ${ingredient.unit || ''}`}
                                </td>
                                <td>{ingredient.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )}
    </div>

    {/* Suggestions */ }
    {
        notes && (
            <div className='row'>
                <div className='col-12 mt-4'>
                    <ul>{notes}</ul>
                </div>
            </div>
        )
    }

    {/* Notes */ }
    {
        remark && (
            <div className='row'>
                <div className='col-12 mt-4'>
                    <h3>Nota</h3>
                    {remark}
                </div>
            </div>
        )
    }
        </SectionBackground >
    );
}

export default RecipeLayout;