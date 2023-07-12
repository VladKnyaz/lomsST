import TokenService from './../../services/tokenService.js';

function checkAdmin(req, res, next) {
    if (!req.cookies.token) {
        res.status(403).json({ message: 'Авторизуйтесь' });
        return;
    }
    let valid = TokenService.checkValid(req.cookies.token);
    if (!valid) {
        res.status(403).json({ message: 'Авторизуйтесь' });
        return;
    }
    next();
}

export default checkAdmin;
