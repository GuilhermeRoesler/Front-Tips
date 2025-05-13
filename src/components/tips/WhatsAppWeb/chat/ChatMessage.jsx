import React from 'react'

const ChatMessage = ({ content, type, timestamp }) => {
    return (
        <div className={`ChatMessage ${type}`}>
            <p>{content}</p>
            <p className='timestamp'>{timestamp}</p>
        </div>
    )
}

export default ChatMessage