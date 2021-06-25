import { useState } from 'react'
import { userProps } from '../types'
import UserService from '../services/auth'

const service = new UserService()

const useUser = (): userProps => {
  const [userObject, setUserObject] = useState(null)
  const [jwt, setJwt] = useState(null)

  const logout = () => {
    console.log("entro logout");
    setUserObject(null)
  }
  const login = async (username: string, password: string) => {
    console.log({
      type: "login",
      user: {
        username,
        password
      }
    });
    const {user, jwt} = await service.login(username, password)
    setUserObject(user)
    setJwt(jwt)
  }

  return {
    jwt,
    user: userObject,
    login,
    logout
  }
}

export default useUser
