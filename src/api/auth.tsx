export const isAuthenticated = () => {
    const token = localStorage.getItem('auth-token');
    return Boolean(token);
};
