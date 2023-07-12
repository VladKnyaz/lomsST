import { $api } from '../api';

export default class GameService {
    static getGame(id) {
        return $api.get(`/user/game/${id}`);
    }
}
