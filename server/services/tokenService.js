import { SECRET_KEY } from '../index.js';
import { Admins } from '../modules/database/models/admins.js';
import jwt from 'jsonwebtoken';

export default class TokenService {
    static checkValid(token) {
        try {
            let res = jwt.verify(token, SECRET_KEY);
            return true;
        } catch (e) {
            console.log(e.message);
            return false;
        }
    }
}
