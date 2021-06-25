import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            HOME
            {user && user.jwt}
        </div>
    )
}

export default Home
