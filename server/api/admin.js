import express from 'express';

import checkAdmin from './middlwares/checkAdmin.js';

let adminApi = express.Router();

adminApi.use('/', checkAdmin);

adminApi.get('/valid', (req, res) => {
    // Учитывая что есть мидлвеер выше можно отправить сразу хороший ответ
    res.json({ message: 'Successfully' });
});

export { adminApi };
