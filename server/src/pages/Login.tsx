import { useContext, useEffect } from 'react'
import AuthContext from '../context/AuthContext'
import LoginForm from '../components/LoginForm/LoginForm'
import { useLocation } from 'wouter'

const Login = () => {
  const { error, user, login } = useContext(AuthContext)
  const [location, setLocation] = useLocation()

  useEffect(() => {
    if (user && location === '/login') {
      setLocation('/')
    }
  }, [user, location])

  return (
        <div>
            <span className="text-red-600">{error && error}</span>
            <LoginForm
              login={login}
            />
        </div>
  )
}

export default Login
