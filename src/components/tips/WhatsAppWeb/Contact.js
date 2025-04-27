import React from 'react'

const Contact = ({ name, lastMessage, lastMessageTime }) => {
    return (
        <div id='Contact'>
            <div className="photo"></div>
            <p>{name}</p>
            <p>Qual seu nome?</p>
        </div>
    )
}

export default Contact