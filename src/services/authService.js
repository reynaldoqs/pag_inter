export const isAuthenticated = () => {
    return localStorage.getItem('user') !== undefined;
};

export const getToken = () => {
    return (JSON.parse(localStorage.getItem('user'))).accesos.token;
};

export const getUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

export const authService = {
    isAuthenticated,
    getToken,
    getUser,
};