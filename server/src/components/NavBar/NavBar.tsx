import { Link } from "wouter"

const NavBar = () => {
    return (
        <div className='navbar'>
            <nav>
                <Link href='/'>Home</Link>
                <Link href='/login'>Login</Link>
            </nav>
        </div>
    )
}

export default NavBar
