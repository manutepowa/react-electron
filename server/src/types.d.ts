
export interface userProps {
    jwt: string,
    user: any,
    login: (username: string, password: string) => Promise<void>,
    logout: () => void
  }