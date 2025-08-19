import React, { createContext, useContext, useState } from 'react';
import { AuthContextType } from './AuthContextTypes';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    const value = {
        isAuthenticated,
        login,
        logout,
        
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


