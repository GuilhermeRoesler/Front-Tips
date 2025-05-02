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
        </nav>
    )
}

export default Navbar;