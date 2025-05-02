import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <>
            <header id='Header'>
                <div className='pagetop'>
                    <a href="/home">Front Tips</a>
                    <button>Contact</button>
                </div>
                <div className='subtopnav'>
                    <a href="oi">oi</a>
                    <a href="oi">oi</a>
                    <a href="oi">oi</a>
                    {/* <Navbar /> */}
                </div>
            </header>
        </>
    )
}

export default Header;