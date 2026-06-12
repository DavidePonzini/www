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

const RECIPES: Record<string, RecipeComponent[]> = {
    'Primi': [
        Amatriciana,
        Carbonara,
        Gnocchi,
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
        Frittata,
        Omelette,
        PolloAllaLigure,
        PolloCaramellato,
        Polpette,
        SalsicciaVerdureAlForno,
        Spezzatino,
    ],
    'Contorni': [
        CipolleCaramellate,
        Focaccia,
        FrittellePatate,
        PomodoriPangrattato,
        PureDiPatate,
        SpiediniTritato,
        UovaSode,
    ],
    'Salse': [
        Besciamella,
        FondutaFormaggio,
        SalsaTahina,
        SalsaBarbeque,
        Ragu,
        Ragu2,
    ],
    'Dolci': [
        CaramelloMou,
        CioccolatiniMou,
        Cookies,
        CremaNoccioleNutella,
        Gelato,
        Ginevrini,
        Mostaccioli,
        Nutellotti,
        Sacher,
        SalameAlCioccolato,
        TortaRosaria,
        Tiramisu,
    ],
    'Bevande': [
        CremaCocco,
        Sciroppo62,
        SciroppoCannella,
    ],
    'Altro': [
        NoccioleTostate,
        Pisto,
        SpezieCarne,
        SpeziePatate,
    ],
};

export default RECIPES;
