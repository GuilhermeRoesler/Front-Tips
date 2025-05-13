import React from 'react'
import ChatMessage from './ChatMessage'
import { formatTime } from '../../../../utils/timeFormatter'

const ChatConversation = ({ isLogged, user, messages }) => {
    return (
        <div className="ChatConversation">
            {!isLogged ? (<>
                <ChatMessage content='Olá, tudo bem?' type='sent' timestamp='10:00' />
                <ChatMessage content='Tudo sim' type='received' timestamp='10:02' />
                <ChatMessage content='E você?' type='received' timestamp='10:02' />
            </>) : (<>
                {messages.map((message, index) => (
                    <ChatMessage
                        key={index}
                        content={message.content}
                        type={message.sender === user.id ? 'sent' : 'received'}
                        timestamp={formatTime(message.sent_at)} />
                ))}
            </>)}
        </div>
    )
}

export default ChatConversation