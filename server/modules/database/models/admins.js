import { DataTypes, Model } from 'sequelize';

import seq from '../index.js';

const Admins = seq.define('admins', {
    login: {
        type: DataTypes.TEXT,
        unique: true,
    },
    password: {
        type: DataTypes.TEXT,
        unique: true,
    },
    jwt: {
        type: DataTypes.TEXT,
        unique: true,
    },
});

export { Admins };
