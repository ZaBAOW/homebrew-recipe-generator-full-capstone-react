export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
    try {
        localStorage.setItem('authToken', authToken);
    } catch (e) {}
};

export const clearAuthToken = () => {
    try {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
    } catch (e) {}
};

export const saveId = id => {
    try {
        localStorage.setItem('userId', id);
    } catch (e) {}
};