import './modules/database/index.js';
import './api/index.js';

const SECRET_KEY = 'TEMA_AliBABA';

export { SECRET_KEY };

// import bcrypt from 'bcrypt';
// import { Admin } from './modules/database/models/admins.js';

// function createAdmin(login, password) {
//     let salt = 7;
//     password = bcrypt.hashSync(password, salt);
//     Admin.create({ login, password });
// }

// createAdmin('admin', 'admin');
