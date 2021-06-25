import { useState } from "react"

const LoginForm = ({login}) => {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    const handleLogin = (e) => {
        e.preventDefault()
        login(username, password)
    }

    return (
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="Usuario" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm
