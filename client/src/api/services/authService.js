import { $api } from '../api';

export default class AuthService {
    static async login(login, password) {
        return $api.post('/user/login', { login, password });
    }
    static async admin() {
        return $api.get('/admin/valid');
    }
}
