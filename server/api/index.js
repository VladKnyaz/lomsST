import express from 'express';
import cors from 'cors';
import cookiePars from 'cookie-parser';
import fs from 'fs';
import https from 'https';
import path from 'path';

import { adminApi } from './admin.js';
import { userApi } from './user.js';
import { mailApi } from './mail.js';

const app = express();
const port = 5000;

app.use(express.json());
app.use(cookiePars());
app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:3000', 'https://loms-studio.com'],
    }),
);
// app.use(express.cookie)

app.use('/api/admin', adminApi);

app.use('/api/user', userApi);
app.use('/api/mail', mailApi);
app.get('/', (req, res) => {
    res.send("Who are you? I didn't call you. Go fuck yourself");
});

const __dirname = path.resolve();
const httpsOptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/loms-studio.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/loms-studio.com/fullchain.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/live/loms-studio.com/chain.pem'),
};
// https.createServer(httpsOptions, app).listen(port, () => {
//     console.log('start serv', port);
// });

app.listen(port, () => {
    console.log('start serv', port);
});
