import { useLocation, useSearchParams } from 'react-router-dom';

import EditableValue from './EditableValue';
import Source from './Source';
import Servings from './Servings';

import SectionBackground from '../SectionBackground';
import { getFlowStorageKey } from '../flow/FlowUtils';

function RecipeLayout({
    title,
    servings = 1,
    servingsUnitSingular = 'porzione',
    servingsUnitPlural = 'porzioni',
    source,
    ingredients = [],       // [{name: string, quantity: number, unit: string}]
    instructions = null,
    notes = null,
    remark = null,

}) {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const scale = Number(searchParams.get('scale') ?? 1);
    const flowStorageKey = getFlowStorageKey(location.pathname);

    function quantityContainsNumber(quantity) {
        if (typeof quantity === 'number') {
            return Number.isFinite(quantity);
        }

        if (typeof quantity === 'string') {
            return /\d/.test(quantity);
        }

        return false;
    }

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

    function onResetPreparation() {
        window.sessionStorage.removeItem(flowStorageKey);
        window.dispatchEvent(new CustomEvent('flow-reset', {
            detail: {
                storageKey: flowStorageKey
            }
        }));
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

                    <Source>{source}</Source>
                </div>

                <div className='col-lg-6'>
                </div>
            </div>

            {/* Preparation + Ingredients */}
            <div className='row'>
                {instructions && (
                    <div className='col-lg-6 order-2 order-lg-1'>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                marginBottom: '.5rem'
                            }}
                        >
                            <h3 style={{ marginBottom: 0 }}>Preparazione</h3>

                            <button
                                type='button'
                                className='btn btn-outline-secondary btn-sm'
                                onClick={onResetPreparation}
                            >
                                Reset
                            </button>
                        </div>

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
                                                quantityContainsNumber(ingredient.quantity) ? (
                                                    <EditableValue
                                                        onChange={newQuantity => onQuantityChange(index, parseFloat(newQuantity))}
                                                    >
                                                        {formatQuantity(ingredient.quantity)}
                                                    </EditableValue>
                                                ) : (
                                                    formatQuantity(ingredient.quantity)
                                                )
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

            {/* Suggestions */}
            {
                notes && (
                    <div className='row'>
                        <div className='col-12 mt-4'>
                            <ul>{notes}</ul>
                        </div>
                    </div>
                )
            }

            {/* Notes */}
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
