import { jwtDecode } from "jwt-decode";

export const getToken = () => {
    return localStorage.getItem('token');
}

export const getUserFromToken = () => {
    const token = getToken();
    if(!token) return null;

    try {
        const decodedToken = jwtDecode(token);
        return decodedToken;
    } catch(error) {
        console.error('Token invalido',error);
        return null;
    }
}

export const isAuthenticated = () => {
    return !!getToken();
}

export const hasRole = (requiredRole:string) => {
    const user = getUserFromToken();
    return user && user.role === requiredRole;
}