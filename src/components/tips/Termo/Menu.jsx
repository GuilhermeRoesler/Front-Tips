import React from 'react'
import { amountNames } from '../../../data/TermoData'

const Menu = ({ setAmount, setLength }) => {
    const handleClick = (index) => {
        setAmount(index + 1)
        setLength(index + 6)
    }

    return (
        <div className='Menu'>
            {amountNames.map((name, index) => (
                <button key={index} onClick={() => handleClick(index)}>{name}</button>
            ))}
        </div>
    )
}

export default Menu