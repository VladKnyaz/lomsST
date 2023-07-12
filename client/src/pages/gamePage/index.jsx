import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Search from '../../components/search';
import GameService from './../../api/services/gameService';

import './index.css';

function GamePage() {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (isNaN(id)) {
            return navigate('/');
        }
        // GameServic
    });

    return (
        <div className="gamePage">
            <div className="container gamePage__container">
                <Search placeholder={'Search'} />
            </div>
        </div>
    );
}

export default GamePage;
