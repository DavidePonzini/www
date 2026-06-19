import Layout from '../components/Layout';
import SectionBackground from '../components/SectionBackground';
import Section from '../components/Section';
import { useState, useEffect } from 'react';

const CHECKLIST_KEY = 'travel-checklist-items';

const ITEMS = [
    {
        category: 'Vestiti',
        items: [
            'Calze',
            'Mutande',
            'Maglie',
            'Pantaloni',
            'Felpa',
            'Pigiama',
            'Ciabatte',
            'Occhiali da sole',
            'Cintura',
            'Costume',
        ],
    },
    {
        category: 'Cura del corpo',
        items: [
            'Dentifricio',
            'Spazzolino denti',
            'Rasoio',
            'Sapone',
            'Shampoo',
            'Balsamo',
            'Burro cacao',
            'Crema solare',
            'Asciugamano',
        ],
    },
    {
        category: 'Elettronica',
        items: [
            'Presa universale',
            'Caricatore orologio',
            'Cavo USB C - C',
            'Adattatore USB C - Lightning',
            'Auricolari',
            'Power bank',
        ],
    },
    {
        category: 'Cibo',
        items: [
            'Acqua',
        ],
    },
    {
        category: 'Gite in montagna',
        items: [
            'Acqua',
            'Ginocchiera',
            'Cappellino',
            'Crema solare',
            'Occhiali da sole',
        ],
    },
    {
        category: 'Viaggi all\'estero',
        items: [
            'Passaporto',
        ],
    },
    {
        category: 'Conferenze',
        items: [
            'Abito elegante',
            'Computer',
            'Adattatore USB C - DC IN',
            'Chiavetta USB',
        ],
    },
    {
        category: 'Altro',
        items: [
            'Sacchetto per vestiti sporchi',
            'Medicine (Moment)',
        ],
    },
    {
        category: 'Essenziali',
        items: [
            'Portafogli',
            'Documenti',
            'Telefono',
            'Chiavi',
        ],
    },
];

function TravelChecklist() {
    // NOTE: localStorage contains a list of checked items. Unchecked items are not stored.

    const [checked, setChecked] = useState(() => {
        const stored = localStorage.getItem(CHECKLIST_KEY);
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem(CHECKLIST_KEY, JSON.stringify(checked));
    }, [checked]);

    const toggleItem = (item) => {
        setChecked((prev) =>
            prev.includes(item)
                ? prev.filter((i) => i !== item)
                : [...prev, item]
        );
    };

    const onReset = () => {
        setChecked([]);
    };

    return (
        <Layout>
            <SectionBackground>
                <Section title="Travel Checklist" />
                <button
                    type='button'
                    className='btn btn-outline-secondary mb-3'
                    onClick={onReset}
                >
                    Reset
                </button>

                {ITEMS.map((section) => (
                    <div key={section.category}>
                        <h2 key={section.category} className="mt-2">
                            {section.category}
                        </h2>

                        <div className="text-start" style={{ columnCount: 'auto', columnWidth: '300px' }}>
                            {section.items.map((item) => (
                                <div key={item}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={checked.includes(item)}
                                            onChange={() => toggleItem(item)}
                                            style={{
                                                marginRight: '0.5rem',
                                                accentColor: checked.includes(item) ? 'gray' : 'inherit',
                                            }}
                                        />
                                        <span
                                            style={{
                                                color: checked.includes(item) ? 'gray' : 'inherit',
                                                textDecoration: checked.includes(item) ? 'line-through' : 'none'
                                            }}>
                                            {item}
                                        </span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </SectionBackground>
        </Layout>
    );
}

export default TravelChecklist;