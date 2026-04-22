import { useLocation, useSearchParams } from 'react-router-dom';

import EditableValue from './EditableValue';
import RecipeMetaItem from './RecipeMetaItem';
import { formatRecipeDate } from './RecipeFormat';

import SectionBackground from '../SectionBackground';
import { getFlowStorageKey } from '../flow/FlowUtils';
import { Flow, Sequence } from '../flow';

const sectionHeadingStyle = {
    marginBottom: '.9rem',
    fontFamily: '"Georgia", "Times New Roman", serif',
    fontSize: '1.9rem',
    fontWeight: 700,
    letterSpacing: '.04em',
    color: '#7f2318',
};

function RecipeSectionDivider({ title, accent = '#8f2d1f' }) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                margin: '.5rem 0 1rem',
            }}
        >
            <span
                aria-hidden='true'
                style={{
                    flex: 1,
                    maxWidth: '9rem',
                    height: '2px',
                    background: `linear-gradient(90deg, transparent, ${accent})`,
                }}
            />

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '.75rem',
                    color: accent,
                }}
            >
                <span
                    aria-hidden='true'
                    style={{
                        width: '.5rem',
                        height: '.5rem',
                        borderRadius: '50%',
                        backgroundColor: accent,
                        boxShadow: `0 0 0 4px ${accent}1f`,
                    }}
                />

                <span
                    style={{
                        fontFamily: '"Georgia", "Times New Roman", serif',
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        letterSpacing: '.2em',
                        textTransform: 'uppercase',
                    }}
                >
                    {title}
                </span>

                <span
                    aria-hidden='true'
                    style={{
                        width: '.5rem',
                        height: '.5rem',
                        borderRadius: '50%',
                        backgroundColor: accent,
                        boxShadow: `0 0 0 4px ${accent}1f`,
                    }}
                />
            </div>

            <span
                aria-hidden='true'
                style={{
                    flex: 1,
                    maxWidth: '9rem',
                    height: '2px',
                    background: `linear-gradient(90deg, ${accent}, transparent)`,
                }}
            />
        </div>
    );
}

function RecipeNote({ children }) {
    return (
        <div
            style={{
                marginTop: '1.5rem',
            }}
        >
            <RecipeSectionDivider title='Note' accent='#303f6f' />
            <div>{children}</div>
        </div>
    );
}

function RecipeRemark({ children }) {
    return (
        <div
            style={{
                marginTop: '2rem',
            }}
        >
            <div
                aria-hidden='true'
                style={{
                    width: '4rem',
                    height: '.7rem',
                    marginBottom: '.75rem',
                    borderLeft: '3px solid #b32020',
                    borderTop: '3px solid #b32020',
                }}
            />

            <div
                style={{
                    paddingLeft: '1rem',
                    borderLeft: '3px solid #b32020',
                    color: '#7f2318',
                    fontFamily: '"Georgia", "Times New Roman", serif',
                    fontStyle: 'italic',
                    lineHeight: 1.8,
                }}
            >
                {children}
            </div>
        </div>
    );
}

function RecipeLayout({
    title,
    servings = 1,
    servingsUnitSingular = 'porzione',
    servingsUnitPlural = 'porzioni',
    source,
    addedOn,
    times = null,
    ingredients = [],       // [{name: string, quantity: number, unit: string}]
    instructions = null,
    notes = null,
    remark = '',

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

    function getServingsUnitLabel() {
        return formatQuantity(servings) === 1 ? servingsUnitSingular : servingsUnitPlural;
    }

    const hasRemark = typeof remark === 'string' && remark.trim() !== '';

    return (
        <SectionBackground img={null}>
            <header
                style={{
                    paddingTop: '2rem',
                    textAlign: 'center',
                }}
            >
                <h1
                    style={{
                        marginBottom: '.5rem',
                        fontFamily: '"Georgia", "Times New Roman", serif',
                        fontSize: 'clamp(2.6rem, 6vw, 4.4rem)',
                        fontWeight: 700,
                        letterSpacing: '.06em',
                        color: '#6e2418',
                        textShadow: '0 2px 0 rgba(255,255,255,0.8)',
                    }}
                >
                    {title}
                </h1>

                <div
                    aria-hidden='true'
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '.75rem',
                        marginBottom: '.75rem',
                        color: '#8f2d1f',
                    }}
                >
                    <span style={{ width: '3.5rem', height: '1px', backgroundColor: 'currentColor', opacity: .5 }} />
                    <span
                        style={{
                            width: '.65rem',
                            height: '.65rem',
                            transform: 'rotate(45deg)',
                            border: '1px solid currentColor',
                            opacity: .75,
                        }}
                    />
                    <span style={{ width: '3.5rem', height: '1px', backgroundColor: 'currentColor', opacity: .5 }} />
                </div>
            </header>

            {/* Header */}
            <div className='row'>
                <div className='col-lg-6 mt-4'>
                    <h2 style={sectionHeadingStyle}>Informazioni</h2>
                    <table>
                        <tbody>
                            <RecipeMetaItem icon='fa-solid fa-utensils'>
                                <span>
                                    <EditableValue
                                        onChange={onServingsChange}
                                    >
                                        {formatQuantity(servings)}
                                    </EditableValue>
                                    {` ${getServingsUnitLabel()}`}
                                </span>
                            </RecipeMetaItem>

                            <RecipeMetaItem icon='fa-solid fa-address-book'>
                                {source}
                            </RecipeMetaItem>

                            <RecipeMetaItem icon='fa-solid fa-calendar-days'>
                                {formatRecipeDate(addedOn)}
                            </RecipeMetaItem>
                        </tbody>
                    </table>
                </div>

                <div className='col-lg-6 mt-4'>
                    {times && (
                        <>
                            <h2 style={sectionHeadingStyle}>Tempi</h2>
                            <table
                            >
                                <tbody>{times}</tbody>
                            </table>
                        </>
                    )}
                </div>
            </div>

            {/* Preparation + Ingredients */}
            <div className='row'>
                {instructions && (
                    <div className='col-lg-6 order-2 order-lg-1 mt-4'>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                marginBottom: '.5rem'
                            }}
                        >
                            <h2 style={sectionHeadingStyle}>Preparazione</h2>

                            <button
                                type='button'
                                className='btn btn-outline-secondary btn-sm'
                                onClick={onResetPreparation}
                                style={{
                                    marginBottom: '.5rem'
                                }}
                            >
                                Reset
                            </button>
                        </div>

                        <Flow>
                            <Sequence>
                                {instructions}
                            </Sequence>
                        </Flow>
                    </div>
                )}

                {ingredients && (
                    <div className='col-lg-6 order-1 order-lg-2 mt-4'>
                        <h2 style={sectionHeadingStyle}>Ingredienti</h2>

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
                            <RecipeNote>
                                <ul
                                    style={{
                                        margin: 0,
                                        paddingLeft: '1.5rem',
                                        lineHeight: 1.7,
                                    }}
                                >
                                    {notes}
                                </ul>
                            </RecipeNote>
                        </div>
                    </div>
                )
            }

            {/* Notes */}
            {
                hasRemark && (
                    <div className='row'>
                        <div className='col-12 mt-4'>
                            <RecipeRemark>
                                {remark}
                            </RecipeRemark>
                        </div>
                    </div>
                )
            }
        </SectionBackground >
    );
}

export default RecipeLayout;
