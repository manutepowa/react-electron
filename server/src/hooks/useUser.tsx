import { useState } from 'react'
import { userProps } from '../types'
import UserService from '../services/auth'

const service = new UserService()

const useUser = (): userProps => {
  const [userObject, setUserObject] = useState(null)
  const [jwt, setJwt] = useState(null)

  const logout = () => {
    console.log('entro logout')
    setUserObject(null)
  }

  const login = async (username: string, password: string) => {
    const { user, jwt } = await service.login(username, password)
    setUserObject(user)
    setJwt(jwt)
    localStorage.setItem('jwt', jwt)
  }

  const me = async (sessionJwt: string) => {
    const user = await service.me(sessionJwt)
    setUserObject(user)
    setJwt(sessionJwt)
  }

  return {
    me,
    jwt,
    user: userObject,
    login,
    logout
  }
}

export default useUser
