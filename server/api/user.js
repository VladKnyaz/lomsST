import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { Admins } from '../modules/database/models/admins.js';
import { SECRET_KEY } from '../index.js';

let userApi = express.Router();

userApi.post('/login', async (req, res) => {
    res.status(503);
    let candidate = await Admins.findOne({
        where: {
            login: req.body.login,
        },
    });
    if (!candidate) {
        res.status(403).json({ message: 'Логин или пароль не верный' });
        return;
    }

    let validPass = bcrypt.compareSync(req.body.password, candidate.password);

    if (!validPass) {
        res.status(403).json({ message: 'Логин или пароль не верный' });
        return;
    }

    let token = jwt.sign({ login: candidate.login }, SECRET_KEY, {
        expiresIn: '1d',
    });
    res.cookie('token', token, { httpOnly: true, maxAge: 60000 * 60 * 24 }); // 1 день
    res.json({ message: 'ok', token });
    candidate.jwt = token;
    candidate.save();
});

userApi.get('/game/:id', async (req, res) => {
    console.log(req.params);
    let candidate = await Admins.findOne({
        where: {
            login: req.body.login,
        },
    });
    if (!candidate) {
        res.status(403).json({ message: 'Логин или пароль не верный' });
        return;
    }
});

export { userApi };
