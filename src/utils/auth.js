const TOKEN_KEY = 'the-game-token'
const ID_USER = ''

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
}

export const login = (token, id) => {
    if (token) {
        localStorage.setItem(TOKEN_KEY, token);
        localStorage.setItem(ID_USER, id);
    }
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    window.location.hrel = '/';
}

export const getId = () => {
    return localStorage.getItem(ID_USER);
}

export const isAuth = () => {
    return getToken() !== null;
}