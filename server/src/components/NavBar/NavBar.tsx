import { useContext } from "react"
import { Link } from "wouter"
import AuthContext from "../../context/AuthContext"

const NavBar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='flex p-6 justify-between'>
            <nav>
                <Link href='/'>Home</Link>
                {/* <Link href='/login'>Login</Link> */}
            </nav>
            <div>
                {user && user.email}
            </div>
        </div>
    )
}

export default NavBar
