import React from 'react'

const ConversationItem = ({ name, conversation_id, lastMessage, lastMessageTimestamp = '00:00', setSelectedContact }) => {
    const handleClick = () => {
        console.log(conversation_id)
        setSelectedContact((prev) => ({ ...prev, conversation_id: conversation_id, name: name }))
    }

    return (
        <div className='Contact' onClick={handleClick}>
            <div className="photo"></div>
            <p>{name}</p>
            <p>{lastMessageTimestamp}</p>
            <p>{lastMessage}</p>
            <p><i className='material-symbols-outlined'>keyboard_arrow_down</i></p>
        </div>
    )
}

export default ConversationItem