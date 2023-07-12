import { DataTypes, Model } from 'sequelize';

import seq from '../index';

const Game = seq.define('games', {
    name: {
        type: DataTypes.TEXT,
    },
    description: {
        type: DataTypes.TEXT,
    },
    links: {
        type: DataTypes.JSON,
    },
});

export { Game };
