import { defineRecipe } from './Util';

import {
    CookingTime,
    PreparationTime,
    RecipeLayout,
} from '../../../components/recipes';
import { Step } from '../../../components/flow';

const TITLE = 'Hamburger';

function ImgAssemblaggio() {
    const layers: [string, number, string][] = [
        ['Pancetta', 0, '#c00000'],
        ['Cipolle', 15, '#9a1f55'],
        ['Pomodori', 30, '#ff0000'],
        ['Formaggio', 45, '#f0a000'],
        ['Carne', 60, '#8b4a20'],
        ['Insalata', 75, '#00b000'],
        ['Salse', 90, '#8888ff'],
    ];

    return (
        <figure style={{ textAlign: 'center', margin: '2rem 0' }}>
            <svg
                viewBox='-65 -10 185 215'
                style={{ maxWidth: '300px', width: '100%', height: 'auto' }}
            >
                {/* top bun */}
                <path
                    d='M -40 40 L -40 35 C -40 10, -15 -5, 2.5 -5 C 25 -5, 45 12, 45 35 L 45 40 Q 45 45, 40 45 L -35 45 Q -40 45, -40 40 Z'
                    fill='#ef8613'
                    stroke='black'
                    strokeWidth='1'
                    strokeLinejoin='round'
                />
                <text x='0' y='34' textAnchor='middle' fontSize='12'>
                    Pane
                </text>

                {layers.map(([label, y, color]) => (
                    <g key={label}>
                        <line
                            x1='-35'
                            y1={60 + y}
                            x2='40'
                            y2={60 + y}
                            stroke={color}
                            strokeWidth='3'
                        />
                        <text x='50' y={64 + y} fontSize='11'>
                            {label}
                        </text>
                    </g>
                ))}

                {/* bottom bun */}
                <rect
                    x='-40'
                    y='165'
                    width='85'
                    height='35'
                    rx='8'
                    fill='#ef8613'
                    stroke='black'
                    strokeWidth='1'
                />
                <text x='2.5' y='187' textAnchor='middle' fontSize='12'>
                    Pane
                </text>
            </svg>

            <figcaption style={{ fontStyle: 'italic' }}>
                Assemblare l'hamburger nel seguente ordine.
            </figcaption>
        </figure>
    );
}

function Hamburger() {
    return (
        <RecipeLayout
            title={TITLE}
            servings={1}
            source='Davide Ponzini & Jawad Shurrush'
            addedOn='Maggio 2025'
            times={<>
                <PreparationTime time='10 min'>Escluse cipolle caramellate</PreparationTime>
                <CookingTime time='10 min' flame='alta' />
            </>}
            ingredients={[
                { name: 'Panino', quantity: 1 },
                { name: 'Hamburger', quantity: 1 },
                { name: 'Cipolla o cipolla caramellata', quantity: 1 },
                { name: 'Pancetta', quantity: 50, unit: 'g' },
                { name: 'Pomodori', quantity: 1 },
                { name: 'Insalata', quantity: 'q.b.' },
                { name: 'Formaggio', quantity: 'q.b.' },
                { name: 'Salse' },
            ]}
            instructions={<>
                <Step> (Opzionale) Far caramellare le cipolle. </Step>
                <Step> Soffriggere pancetta fino a che diventa croccante. </Step>
                <Step> Scolare il grasso in eccesso e tostare il pane. </Step>
                <Step> Cuocere carne da una parte. </Step>
                <Step> Girare, aggiungere formaggio sopra e cuocere l'altro lato. </Step>
                <Step> Assemblare come mostrato in figura. </Step>
            </>}
            notes='Jo insiste che questa non sia una ricetta.'
        >
                <ImgAssemblaggio />
        </RecipeLayout>
    );
}

export default defineRecipe(Hamburger, TITLE);


// \begin{figure}[h]
//     \centering
//     \begin{tikzpicture}[x=1cm, y=1cm]
//         % Top bun (distance .4)
//         \fill[brown!40!orange, thick, rounded corners=10pt] (-1,3.4) -- (2,3.4) arc[start angle=0,end angle=180,radius=2cm] -- cycle;
//         \draw[thick, rounded corners=10pt] (-1,3.4) -- (2,3.4) arc[start angle=0,end angle=180,radius=2cm] -- cycle;
//         \node at (0,3.8) {Pane};
    
//         % Layers (each has a distance of .5)
//         \draw[thick,red!70!brown, line width=2pt] (-1.5,3.0) -- (1.5,3.0);
//         \node[right] at (2,3.0) {Pancetta};
    
//         \draw[thick,purple!60!gray, line width=2pt] (-1.5,2.5) -- (1.5,2.5);
//         \node[right] at (2,2.5) {Cipolle};
    
//         \draw[thick,red!80!pink, line width=2pt] (-1.5,2.0) -- (1.5,2.0);
//         \node[right] at (2,2.0) {Pomodori};
    
//         \draw[thick,orange!80!yellow, line width=2pt] (-1.5,1.5) -- (1.5,1.5);
//         \node[right] at (2,1.5) {Formaggio};
    
//         \draw[thick,brown!80!black, line width=2pt] (-1.5,1.0) -- (1.5,1.0);
//         \node[right] at (2,1.0) {Carne};
    
//         \draw[thick,green!70!black, line width=2pt] (-1.5,0.5) -- (1.5,0.5);
//         \node[right] at (2,0.5) {Insalata};
    
//         \draw[thick,blue!40!white, line width=2pt] (-1.5,0) -- (1.5,0);
//         \node[right] at (2,0) {Salse};
    
//         % Bottom bun (distance .4)
//         \fill[brown!40!orange, thick, rounded corners=10pt] (-2,-0.4) rectangle (2,-1.6);
//         \draw[thick, rounded corners=10pt] (-2,-0.4) rectangle (2,-1.6);
//         \node at (0,-1) {Pane};
//     \end{tikzpicture}
    
    
//     \caption{Assemblare l'hamburger nel seguente ordine.}
// \end{figure}
