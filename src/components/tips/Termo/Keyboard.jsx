import React from 'react'
import { tecladoQWERTY } from '../../../data/TermoData'

const Keyboard = ({ endMessage, handleEnter, handleDelete, handleKey }) => {
    const handleClick = (k) => {
        if (endMessage !== '') return
        if (k === 'backspace') {
            handleDelete()
        } else if (k === 'enter') {
            handleEnter()
        } else {
            handleKey(k)
        }
    }

    return (
        <div className='Keyboard'>
            {tecladoQWERTY.map((key, index) => (
                key === 'backspace' ? (
                    <button key={index} onClick={() => handleClick(key)} className={key}><i className="material-symbols-outlined">{key}</i></button>
                ) : (
                    <button key={index} onClick={() => handleClick(key)} className={key}>{key}</button>
                )
            ))}
        </div>
    )
}

export default Keyboard