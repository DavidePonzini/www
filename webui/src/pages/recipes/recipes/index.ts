import { RecipeComponent } from './Util';

import SpezieCarne from './SpezieCarne';
import SpeziePatate from './SpeziePatate';
import Carbonara from './Carbonara';
import Amatriciana from './Amatriciana';
import PureDiPatate from './PureDiPatate';
import Sciroppo62 from './Sciroppo62';
import SciroppoCannella from './SciroppoCannella';
import CremaCocco from './CremaCocco';
import RisoJawad from './RisoJawad';
import RisoJawadFagiolini from './RisoJawadFagiolini';
import RisoJawadAglio from './RisoJawadAglio';
import Besciamella from './Besciamella';
import SalsaTahina from './SalsaTahina';
import PolloAllaLigure from './PolloAllaLigure';
import Tiramisu from './Tiramisu';
import UovaSode from './UovaSode';
import Brasato from './Brasato';
import SalsaBarbeque from './SalsaBarbeque';
import Polpette from './Polpette';
import Pisto from './Pisto';
import SalsicciaVerdureAlForno from './SalsicciaVerdureAlForno';
import Ragu from './Ragu';
import Ragu2 from './Ragu2';
import RisoJawadTritato from './RisoJawadTritato';
import RisottoZafferano from './RisottoZafferano';
import RisottoZucchine from './RisottoZucchine';
import PolloCaramellato from './PolloCaramellato';
import Spezzatino from './Spezzatino';
import SpiediniTritato from './SpiediniTritato';
import SalameAlCioccolato from './SalameAlCioccolato';
import CaramelloMou from './CaramelloMou';
import CioccolatiniMou from './CioccolatiniMou';
import TortelliniPannaProsciutto from './TortelliniPannaProsciutto';
import CipolleCaramellate from './CipolleCaramellate';
import TortaDiRiso from './TortaDiRiso';
import Sacher from './Sacher';
import Cookies from './Cookies';
import PomodoriPangrattato from './PomodoriPangrattato';
import CremaNoccioleNutella from './CremaNoccioleNutella';
import Focaccia from './Focaccia';
import FondutaFormaggio from './FondutaFormaggio';
import Frittata from './Frittata';
import Omelette from './Omelette';
import FrittellePatate from './FrittellePatate';
import Gelato from './Gelato';
import Ginevrini from './Ginevrini';
import Gnocchi from './Gnocchi';
import TortaRosaria from './TortaRosaria';
import Nutellotti from './Nutellotti';
import NoccioleTostate from './NoccioleTostate';
import Mostaccioli from './Mostaccioli';
import InsalataDiRiso from './InsalataDiRiso';
import Lasagne from './Lasagne';
import Pane from './Pane';
import PatateDuchessa from './PatateDuchessa';
import PatatineFritte from './PatatineFritte';
import PiselliConUova from './PiselliConUova';
import Pizza from './Pizza';
import PolentaSalsiccia from './PolentaSalsiccia';
import LiquoreAnice from './LiquoreAnice';
import PastaFattaInCasa from './PastaFattaInCasa';
import PastaZuccaSalsiccia from './PastaZuccaSalsiccia';
import PastaTonnoPrezzemoloLimone from './PastaTonnoPrezzemoloLimone';
import PastaBurroSalvia from './PastaBurroSalvia';
import PastaPomodoroFrescoCrudo from './PastaPomodoroFrescoCrudo';
import PastaPomodoroFrescoCotto from './PastaPomodoroFrescoCotto';
import PastaAglioOlioPeperoncino from './PastaAglioOlioPeperoncino';
import PastaPannaZafferano from './PastaPannaZafferano';
import Kebab from './Kebab';
import RotoliDiPolloConVerdure from './RotoliDiPolloConVerdure';
import Hamburger from './Hamburger';

// NOTE: only export RecipeComponent[] arrays here, otherwise the router will break.

export const primiPasta: RecipeComponent[] = [
    Amatriciana,
    Carbonara,
    Gnocchi,
    Lasagne,
    PastaAglioOlioPeperoncino,
    PastaBurroSalvia,
    PastaFattaInCasa,
    PastaPannaZafferano,
    PastaPomodoroFrescoCotto,
    PastaPomodoroFrescoCrudo,
    PastaTonnoPrezzemoloLimone,
    PastaZuccaSalsiccia,
    TortelliniPannaProsciutto,
];
export const primiRiso: RecipeComponent[] = [
    InsalataDiRiso,
    RisoJawad,
    RisoJawadAglio,
    RisoJawadFagiolini,
    RisoJawadTritato,
    RisottoZafferano,
    RisottoZucchine,
    TortaDiRiso,
];

export const primiPolenta: RecipeComponent[] = [
    PolentaSalsiccia,
];

export const primiCondimenti: RecipeComponent[] = [
    Besciamella,
    FondutaFormaggio,
    Ragu,
    Ragu2,
];

export const secondiCarne: RecipeComponent[] = [
    Brasato,
    Hamburger,
    Kebab,
    PolloAllaLigure,
    PolloCaramellato,
    Polpette,
    RotoliDiPolloConVerdure,
    SalsicciaVerdureAlForno,
    Spezzatino,
    SpiediniTritato,
];

export const secondiPesce: RecipeComponent[] = [];

export const secondiUova: RecipeComponent[] = [
    Frittata,
    Omelette,
    PiselliConUova,
    UovaSode,
];

export const secondiContorni: RecipeComponent[] = [
    CipolleCaramellate,
    FrittellePatate,
    PatateDuchessa,
    PatatineFritte,
    PomodoriPangrattato,
    PureDiPatate,
];

export const panetteria: RecipeComponent[] = [
    Focaccia,
    Pane,
    Pizza,
];

export const salse: RecipeComponent[] = [
    SalsaBarbeque,
    SalsaTahina,
];

export const spezie: RecipeComponent[] = [
    Pisto,
    SpezieCarne,
    SpeziePatate,
];

export const dolciBiscotti: RecipeComponent[] = [
    Cookies,
    Mostaccioli,
    Nutellotti,
];

export const dolciTorte: RecipeComponent[] = [
    Sacher,
    TortaRosaria,
];

export const dolciCaramelleCioccolatini: RecipeComponent[] = [
    CioccolatiniMou,
    Ginevrini,
];

export const dolciCreme: RecipeComponent[] = [
    CaramelloMou,
    CremaNoccioleNutella,
];

export const dolciCucchiaio: RecipeComponent[] = [
    Gelato,
    Tiramisu,
];

export const dolciAltro: RecipeComponent[] = [
    SalameAlCioccolato,
];

export const barCocktail: RecipeComponent[] = [];

export const barSciroppi: RecipeComponent[] = [
    CremaCocco,
    Sciroppo62,
    SciroppoCannella,
];

export const barLiquori: RecipeComponent[] = [
    LiquoreAnice,
];

export const varie: RecipeComponent[] = [
    NoccioleTostate,
];

