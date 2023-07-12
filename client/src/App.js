import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import './styles/App.css';
import './styles/bootstrap-grid.min.css';
import './styles/normalize.css';

import Home from './pages/home/';
import Login from './pages/login/';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Terms from './pages/terms';
import Error404 from './pages/404';

import AdminPanel from './pages/admin/index';
import { CreateGame, DeleteGame } from './pages/admin/components/game';
import GamePage from './pages/gamePage';

function App() {
    let lang = localStorage.getItem('lang');
    if (!lang) localStorage.setItem('lang', 'en');

    const [isActiveBurger, setIsActiveBurger] = useState(false);

    return (
        <div className="wrapper">
            <Header isActiveBurger={isActiveBurger} setIsActiveBurger={setIsActiveBurger} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            isActiveBurger={isActiveBurger}
                            setIsActiveBurger={setIsActiveBurger}
                        />
                    }
                />
                <Route path="/privacy-policy" element={<Terms />} />
                <Route path="/login" element={<Login />} />
                <Route path="/game/:id" element={<GamePage />} />
                <Route path="/admin/*" element={<AdminPanel />}>
                    <Route path="createGame" element={<CreateGame />} />
                    <Route path="deleteGame" element={<DeleteGame />} />
                </Route>
                <Route path="*" element={<Error404 />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
