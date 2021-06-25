
export interface userProps {
  me: (sessionJwt: string) => Promise<void>,
  jwt: string,
  user: any,
  login: (username: string, password: string) => Promise<void>,
  logout: () => void
}
