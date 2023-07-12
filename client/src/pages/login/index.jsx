import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../api/services/authService';

import './index.css';

function Login() {
    let navigate = useNavigate();

    async function loginsrv(e) {
        e.preventDefault();

        try {
            await AuthService.login(e.target.login.value, e.target.password.value);
            localStorage.setItem('isAuth', true);
            // сделал костылём потому что когда делаешь через navigate то выводит 404
            window.location.href = 'admin';
            return;
        } catch (err) {
            return navigate('/');
        }
    }

    return (
        <div className="login">
            <div className="login_cont container d-flex justify-content-center flex-column align-items-center p-4">
                <h2>Привет, Тёма!</h2>
                <p>Надеюсь ты помнишь пароль и логин)</p>
                <form onSubmit={loginsrv} className="d-flex flex-column">
                    <input name="login" type="text" placeholder="login" />
                    <input name="password" type="password" placeholder="password" />
                    <button type="submit">login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
