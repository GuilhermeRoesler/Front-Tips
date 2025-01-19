import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header id='Header'>
            <a href="/home">Tips</a>
            <Navbar />
            <button>Contact</button>
        </header>
    )
}

export default Header;