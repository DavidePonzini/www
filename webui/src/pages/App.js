import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Utilities from './utilities/Utilities';
import PwdGen from './utilities/PwdGen';
import Portfolio from './Portfolio';
import DynamicRedirect from './DynamicRedirect';
import Login from './Login';
import Register from './Register';
import Admin from './admin/Admin';
import RecipesRouter from './recipes/RecipesRouter';

import useAuth from '../hooks/useAuth';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import useTooltipObserver from '../hooks/useTooltipObserver';

function App() {
    const { isLoggedIn, userInfo } = useAuth();

    useTooltipObserver();

    return (
        <Router>
            <Routes>
                <Route path='/'>
                    {/* Home */}
                    <Route index element={<Home />} />

                    {/* Utilities */}
                    <Route path='/utils'>
                        <Route index element={<Utilities />} />
                        <Route path='pwd-gen' element={<PwdGen />} />
                    </Route>

                    {/* Portfolio */}
                    <Route path='/portfolio' element={<Portfolio />} />

                    {/* Redirects */}
                    <Route path='/url/:url' element={<DynamicRedirect />} />

                    {/* Recipes (has its own router) */}
                    <Route path='/recipes/*' element={<RecipesRouter />} />

                    {isLoggedIn ? (
                        <>
                            {userInfo?.isAdmin && (
                                <Route path="admin" element={<Admin />} />
                            )}
                        </>
                    ) : (
                        <>
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                        </>
                    )}

                </Route>
            </Routes>
        </Router>
    );
}

export default App;