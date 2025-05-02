import React from 'react'

const Contact = ({ name, lastMessage, lastMessageTime }) => {
    return (
        <div className='Contact'>
            <div className="photo"></div>
            <div>
                <p>{name}</p>
                <p>Qual seu nome?</p>
            </div>
            <div>
                <p>14:51</p>
                <p>v</p>
            </div>
        </div>
    )
}

export default Contact