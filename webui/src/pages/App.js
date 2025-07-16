import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Utilities from './utilities/Utilities';
import PwdGen from './utilities/PwdGen';
import Portfolio from './Portfolio';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import useTooltipObserver from '../hooks/useTooltipObserver';

function App() {
    useTooltipObserver();

    return (
        <Router>
            <Routes>
                <Route path='/'>
                    <Route index element={<Home />} />
                    <Route path='/utils'>
                        <Route index element={<Utilities />} />
                        <Route path='pwd-gen' element={<PwdGen />} />
                    </Route>
                    <Route path='/portfolio' element={<Portfolio />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;