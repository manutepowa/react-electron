import { createContext, ReactChild, useEffect } from 'react'
import useUser from '../hooks/useUser'
import { useLocation } from 'wouter'

const AuthContext = createContext(null)

const AuthProvider = ({ children }: {children: ReactChild}) => {
  const { error, me, jwt, user, login, logout } = useUser()
  const [location, setLocation] = useLocation()

  useEffect(() => {
    (async () => {
      const sessionJwt = localStorage.getItem('jwt')
      if (sessionJwt) {
        await me(sessionJwt)
      }
      if (!user) {
        setLocation('/login')
      }
    })()
  }, [])

  const userData = {
    error,
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

export { AuthProvider }
export default AuthContext
