import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

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
import GameValand from './pages/gameValand';
import GameRomanConquest from './pages/gameRomanConquest';
import Games from './pages/games/index';
import "react-toastify/dist/ReactToastify.css";
import Contacts from './pages/contacts';

function App() {
    let lang = localStorage.getItem('lang');
    if (!lang) localStorage.setItem('lang', 'en');

    const [isActiveBurger, setIsActiveBurger] = useState(false);
   
    return (
        <>

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
                <Route path="/games" element={<Games />} />
                <Route path="/login" element={<Login />} />
                <Route path="/valand" element={<GameValand />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/roman-conquest" element={<GameRomanConquest />} />
                <Route path="/admin/*" element={<AdminPanel />}>
                    <Route path="createGame" element={<CreateGame />} />
                    <Route path="deleteGame" element={<DeleteGame />} />
                </Route>
                <Route path="*" element={<Error404 />} />
            </Routes>

            <Footer />
        </div>
        <ToastContainer theme='dark' progressStyle={{background: "var(--primary-btn-color)"}} autoClose={2000} limit={4}/>

        </>
    );
}

export default App;
