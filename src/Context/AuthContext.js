import { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userObject, setUserObject] = useState('');

    return (
        <AuthContext.Provider
            value={{ isLoggedIn, setIsLoggedIn, userObject, setUserObject }}
        >
            {children}
        </AuthContext.Provider>
    )
}