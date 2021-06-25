import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const Home = () => {
    const {jwt} = useContext(AuthContext)
    return (
        <div>
            HOME
            {jwt && jwt}
        </div>
    )
}

export default Home
