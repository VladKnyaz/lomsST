import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import AuthService from '../../api/services/authService';
import Error404 from './../404/index';

function AdminPanel() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const testAdmin = async () => {
        try {
            if (!JSON.parse(localStorage.getItem('isAuth'))) {
                return navigate('/', {
                    replace: true,
                });
            }
            await AuthService.admin();
            setLoading(false);
        } catch (e) {
            return navigate('/', {
                replace: true,
            });
        }
    };
    useEffect(() => {
        testAdmin();
    });

    if (loading) return <Error404 />;

    return (
        <div className="adminpanel">
            <div className="container">
                <h2 className="title">Вы в админке</h2>
                <Link to="createGame">Создать игру</Link>
                <Link to="deleteGame">Удалить игру</Link>
                <Outlet />
            </div>
        </div>
    );
}

export default AdminPanel;
