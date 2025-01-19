import React from 'react'

const Header = () => {
    return (
        <header id='Header'>
            <a href="/home" id='hTitle'>Tips</a>
            <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/">Page</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Products</a></li>
                </ul>
            </nav>
            <button>Contact</button>
        </header>
    )
}

export default Header;