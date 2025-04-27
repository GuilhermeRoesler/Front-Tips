import React from 'react'

const Message = ({ content, type, timestamp }) => {
    return (
        <div id='Message' className={`message-${type}`}>
            <p>{content}</p>
            <p className='timestamp'>{timestamp}</p>
        </div>
    )
}

export default Message