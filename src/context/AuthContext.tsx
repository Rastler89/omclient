import { createContext, useEffect, useState } from "react";
import { getUserFromToken } from "../utils/authHelper";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const userData = getUserFromToken();
        if(userData) {
            setUser(userData);
            setIsLoggedIn(true);
        } else {
            setUser(null);
            setIsLoggedIn(false);
        }
    }, []);

    const login = (token) => {
        try {
            const decodedUser = jwtDecode(token);
            localStorage.setItem('token',token);
            setUser(decodedUser);
            setIsLoggedIn(true)
        } catch(error) {
            console.error('Error al descodificar',error);
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{user, isLoggedIn, logout, login}}>
            {children}
        </AuthContext.Provider>
    );
}