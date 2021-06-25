import { useContext, useEffect } from 'react'
import AuthContext from '../context/AuthContext'
import LoginForm from '../components/LoginForm/LoginForm'
import { useLocation } from "wouter";

const Login = () => {
    const {user, login} = useContext(AuthContext)
    const [location, setLocation] = useLocation();

    useEffect(() => {
        if (user && location === '/login') {
            setLocation('/')
        }
    }, [user, location, setLocation])

    return (
        <div>
            <LoginForm
                login={login}
            />
        </div>
    )
}

export default Login
