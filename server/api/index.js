import express from 'express';
import cors from 'cors';
import cookiePars from 'cookie-parser';
import fs from 'fs';
import https from 'https';
import path from 'path';

import { adminApi } from './admin.js';
import { userApi } from './user.js';

const app = express();
const port = 5000;

app.use(express.json());
app.use(cookiePars());
app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:3000', 'https://loms-studio.com', 'https://www.loms-studio.com'],
    }),
);
// app.use(express.cookie)

app.use('/api/admin', adminApi);

app.use('/api/user', userApi);

const __dirname = path.resolve();
const httpsOptions = {
    cert: fs.readFileSync(path.join(__dirname, 'cert-generator/certs', 'server.crt')),
    key: fs.readFileSync(path.join(__dirname, 'cert-generator/certs', 'server.key')),
};

// https.createServer(httpsOptions, app).listen(port, () => {
//     console.log('start serv', port);
// });
app.listen(port, () => {
    console.log('start serv', port);
});
