import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { SECRET_KEY } from '../index.js';
import fs from 'fs';
import { log } from 'console';

let mailApi = express.Router();

mailApi.post('/subscribe', async (req, res) => {
 try {
    fs.writeFileSync('mails.txt', `${req.body.name} ${req.body.mail}\n`, {flag: 'a+'});
    res.send('You have subscribed');

 } catch(e) {
    res.send('Server: An error has occurred');

 }
});


export { mailApi };