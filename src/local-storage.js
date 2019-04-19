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
        localStorage.removeItem('userId');
    } catch (e) {}
};

export const saveId = id => {
    try {
        localStorage.setItem('userId', id);
        console.log('userId set...');
    } catch (e) {}
};