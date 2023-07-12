import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateGame = () => {
    const navigate = useNavigate();

    const createGame = async (e) => {
        e.preventDefault();
        console.log(e.target.description.value);

        try {
        } catch (err) {
            return navigate('/');
        }
    };

    return (
        <div className="createGame">
            <h2>Create Game</h2>
            <form onSubmit={createGame} className="d-flex flex-column">
                <input name="name" type="text" placeholder="Name game" />
                <textarea name="description" cols="10" rows="10" placeholder="Description game" />
                <button type="submit">login</button>
            </form>
        </div>
    );
};

const DeleteGame = () => {
    return <div>DeleteGame</div>;
};

export { CreateGame, DeleteGame };
