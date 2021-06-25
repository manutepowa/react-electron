import { createContext, ReactChild, useEffect } from "react";
import useUser from "../hooks/useUser";
import { useLocation } from "wouter";


const AuthContext = createContext(null)

const AuthProvider = ({children}: {children: ReactChild}) => {
    const {jwt, user, login, logout} = useUser()
    const [location, setLocation] = useLocation();

    useEffect(() => {
        if (!user) {
            setLocation('/login')
        }
    }, [user, setLocation])

    const userData = {
        jwt,
        user,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider}
export default AuthContext