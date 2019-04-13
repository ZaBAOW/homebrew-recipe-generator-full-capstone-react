export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
    console.log('saving authToken to Storage');
    try {
        localStorage.setItem('authToken', authToken);
        console.log('authToken Set...');
    } catch (e) {}
};

export const clearAuthToken = () => {
    try {
        console.log('clearing authToken...');
        localStorage.removeItem('authToken');
    } catch (e) {}
};