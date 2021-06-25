export default class UserService {

    url: string

    constructor(){
        this.url = process.env.REACT_APP_BACKEND_URL
    }

    async login(username: string, password: string) {
        const res = await fetch(`${this.url}/auth/local`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              identifier: username,
              password: password
            })
          })

        return await res.json()
    }


    async me(jwt: string) {
      const res = await fetch(`${this.url}/users/me`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          }
        })

      return await res.json()
  }
}