import { SpezieCarne, SpeziePatate } from './Spezie';
import Carbonara from './Carbonara';
import Amatriciana from './Amatriciana';
import PureDiPatate from './PureDiPatate';
import Sciroppo from './Sciroppo';
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

const recipes: { [key: string]: any } = {
    'Primi': [
        Amatriciana,
        Carbonara,
        RisoJawad,
        RisoJawadAglio,
        RisoJawadFagiolini,
        RisoJawadTritato,
        RisottoZafferano,
        RisottoZucchine,
        TortaDiRiso,
        TortelliniPannaProsciutto,
    ],
    'Secondi': [
        Brasato,
        PolloAllaLigure,
        PolloCaramellato,
        SalsicciaVerdureAlForno,
        Spezzatino,
    ],
    'Contorni': [
        Polpette,
        PureDiPatate,
        UovaSode,
        SpiediniTritato,
        CipolleCaramellate,
        PomodoriPangrattato,
    ],
    'Salse': [
        Besciamella,
        SalsaTahina,
        SalsaBarbeque,
        Ragu,
        Ragu2,
    ],
    'Dolci': [
        CaramelloMou,
        CioccolatiniMou,
        Cookies,
        Sacher,
        SalameAlCioccolato,
        Tiramisu,
    ],
    'Bevande': [
        CremaCocco,
        Sciroppo,
        SciroppoCannella,
    ],
    'Altro': [
        Pisto,
        SpezieCarne,
        SpeziePatate,
    ],
};

export default recipes;
