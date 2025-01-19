import React from 'react'
import Dropdown from './Dropdown'
import { pages } from '../data/NavbarData'

const Navbar = () => {
    return (
        <nav>
            <Dropdown name='Home' />
            <Dropdown options={pages} name='Pages' />
            <Dropdown name='About' />
            <Dropdown name='Products' />
            {/* <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/">Page</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Products</a></li>
            </ul> */}
        </nav>
    )
}

export default Navbar;