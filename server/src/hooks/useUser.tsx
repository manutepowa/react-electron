import { useState } from 'react'
import { userProps } from '../types'
import { UserService } from '../services'

const useUser = (): userProps => {
  const [userObject, setUserObject] = useState(null)
  const [jwt, setJwt] = useState(null)
  const [error, setError] = useState(null)

  const logout = () => {
    console.log('entro logout')
    setUserObject(null)
  }

  const login = async (username: string, password: string) => {
    const userResponse = await UserService.login(username, password)
    if (userResponse.error) {
      setError(userResponse.message[0].messages[0].message)
    } else {
      setUserObject(userResponse.user)
      setJwt(userResponse.jwt)
      localStorage.setItem('jwt', userResponse.jwt)
    }
  }

  const me = async (sessionJwt: string) => {
    const user = await UserService.me(sessionJwt)
    setUserObject(user)
    setJwt(sessionJwt)
  }

  return {
    error,
    me,
    jwt,
    user: userObject,
    login,
    logout
  }
}

export default useUser
