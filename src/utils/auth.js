const TOKEN_KEY = 'the-game-token'
const ID_USER = '';
const POINTS = 'POINTS';

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
}

export const login = (token, id) => {
    if (token) {
        localStorage.setItem(TOKEN_KEY, token);
        localStorage.setItem(ID_USER, id);
    }
}
export const savePoints = () => {
    if (!getPoints()) {
        localStorage.setItem(POINTS, 1);
        return;
    }
    localStorage.setItem(POINTS, parseInt(getPoints()) + 1);
}

export const getPoints = () => {
    return localStorage.getItem(POINTS);
}

export const removePoints = () => {
    localStorage.removeItem(POINTS);
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    window.location.href = '/';
}

export const getId = () => {
    return localStorage.getItem(ID_USER);
}

export const isAuth = () => {
    return getToken() !== null;
}