import { defineRecipe } from './Util';

import {
    CookingTime,
    PreparationTime,
    RecipeLayout,
    BakingTimeTopbottom,
} from '../../../components/recipes';
import { Step, Parallel, ParallelBranch } from '../../../components/flow';

const TITLE = 'Rotoli di pollo con verdure';

function ImgTagliPastaSfoglia() {
    return (
        <figure style={{ textAlign: 'center', margin: '2rem 0' }}>
            <svg
                viewBox='0 0 120 160'
                style={{ maxWidth: '300px', width: '100%', height: 'auto' }}
            >
                <defs>
                    <marker
                        id='arrow'
                        markerWidth='6'
                        markerHeight='6'
                        refX='3'
                        refY='3'
                        orient='auto'
                        markerUnits='strokeWidth'
                    >
                        <path d='M 0 0 L 5 3 L 0 6 z' fill='black' />
                    </marker>
                </defs>

                <g
                    transform='translate(10, 10) scale(25)'
                    fill='none'
                    stroke='black'
                    strokeWidth='0.03'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                >
                    {/* cuts */}
                    {Array.from({ length: 10 }).map((_, i) => (
                        <line
                            key={`left-${i}`}
                            x1='0'
                            y1={i * 0.5}
                            x2='1'
                            y2={i * 0.5 + 0.5}
                            stroke='red'
                        />
                    ))}

                    {Array.from({ length: 10 }).map((_, i) => (
                        <line
                            key={`right-${i}`}
                            x1='3'
                            y1={i * 0.5 + 0.5}
                            x2='4'
                            y2={i * 0.5}
                            stroke='red'
                        />
                    ))}

                    {/* pastry */}
                    <rect x='0' y='0' width='4' height='5' />
                    <line x1='1' y1='0' x2='1' y2='5' />
                    <line x1='3' y1='0' x2='3' y2='5' />

                    {/* folding arrows */}
                    <path
                        strokeWidth='0.04'
                        d='M 0.5 5.25 C 0.75 5.75, 1.15 5.75, 1.35 5.25'
                        markerEnd='url(#arrow)'
                    />
                    <path
                        strokeWidth='0.04'
                        d='M 3.5 5.25 C 3.25 5.75, 2.85 5.75, 2.65 5.25'
                        markerEnd='url(#arrow)'
                    />
                </g>
            </svg>

            <figcaption style={{ fontStyle: 'italic' }}>
                Tagliare la pasta sfoglia lungo le linee rosse.
            </figcaption>
        </figure>
    );
}

function RotoliDiPolloConVerdure() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={3}
            servingsUnitSingular='rotolo'
            servingsUnitPlural='rotoli'
            source='Jawad Shurrush'
            addedOn='2022'
            times={<>
                <PreparationTime time='1 h' />
                <CookingTime time='15 min' flame='media' />
                <BakingTimeTopbottom time='30-40 min' temperature={200}>Vedere cottura pasta sfoglia</BakingTimeTopbottom>
            </>}
            ingredients={[
                { name: 'Cipolle', quantity: 100, unit: 'g', category: 'Verdure' },
                { name: 'Peperone rosso', quantity: 150, unit: 'g', category: 'Verdure' },
                { name: 'Peperone giallo', quantity: 150, unit: 'g', category: 'Verdure' },
                { name: 'Mais', quantity: 300, unit: 'g', category: 'Verdure' },

                { name: 'Petto di pollo', quantity: 700, unit: 'g', category: 'Pollo' },
                { name: 'Olio', quantity: 'q.b.', category: 'Pollo' },
                
                { name: 'Sale', quantity: 'q.b.', category: 'Spezie' },
                { name: 'Pepe', quantity: 'q.b.', category: 'Spezie' },
                { name: 'Pepe inglese', quantity: 'q.b.', category: 'Spezie' },
                { name: 'Cannella', quantity: 'q.b.', category: 'Spezie' },
                { name: 'Noce moscata', quantity: 'q.b.', category: 'Spezie' },
                { name: 'Salsa di soia', quantity: 80, unit: 'ml', category: 'Spezie' },
                
                { name: 'Pasta sfoglia', quantity: 3, unit: 'rotoli', category: 'Impasto' },
                { name: 'Tuorli', quantity: 4, unit: '', category: 'Impasto' },
                { name: 'Sesamo', quantity: 'q.b.', category: 'Impasto' },
            ]}
            instructions={<>
                <Parallel>
                    <Step>Tagliare verdure e pollo a cubetti (circa ½ cm).</Step>
                    
                    <ParallelBranch>
                        <Step>Soffriggere cipolla in una padella.</Step>
                        <Step>Quando le verdure iniziano ad essere soffritte, aggiungere peperoni.</Step>
                        <Step>Quando le verdure sono quasi completamente soffritte, aggiungere mais (circa 1 min prima che siano pronte).</Step>
                        <Step>Quando le verdure sono pronte, aggiungere salsa di soia. Mettere meno salsa rispetto al pollo.</Step>
                        <Step>Cuocere per 5 min.</Step>
                    </ParallelBranch>

                    <ParallelBranch>
                        <Step>Soffriggere pollo in un'altra padella.</Step>
                        <Step>Quando il pollo ha preso colore, aggiungere spezie.</Step>
                        <Step>Quando il pollo è pronto, aggiungere salsa di soia. Mettere più salsa rispetto alle verdure.</Step>
                        <Step>Cuocere per 5 min.</Step>
                    </ParallelBranch>
                </Parallel>

                <Step>Unire verdure e pollo e regolare con il sale.</Step>
                <Step>Disporre il preparato sulla pasta sfoglia e richiudere <i>(tagliare la pasta sfoglia come illustrato in figura).</i></Step>
                <Step>Spennellare con i tuorli e cospargere di sesamo.</Step>
                <Step>Infornare.</Step>
                <Step>Una volta pronto, tagliare a fette da un paio di cm.</Step>
            </>}
        >
            <ImgTagliPastaSfoglia />
        </RecipeLayout>
    );
}

export default defineRecipe(RotoliDiPolloConVerdure, TITLE);
