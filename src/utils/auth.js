const TOKEN_KEY='the-game-token'

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
}

export const login = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
}

export const logout =() => {
    localStorage.removeItem(TOKEN_KEY);
    window.location.hrel ='/';
}

export const isAuth = () => {
    return getToken() !==null;
}