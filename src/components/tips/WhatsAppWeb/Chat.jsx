import React, { useState, useEffect } from 'react'
import { getMessagesByConversation } from '../../../services/api'

import ChatTyper from './chat/ChatTyper'
import ChatHeader from './chat/ChatHeader'
import ChatConversation from './chat/ChatConversation'

const Chat = ({ isLogged, user, selectedContact }) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const fetchMessages = async () => {
            if (!isLogged && !user) return;
            try {
                const response = await getMessagesByConversation(selectedContact.conversation_id);
                setMessages(response.data);
            } catch (err) {
                console.error('Erro ao buscar mensagens:', err);
            }
        }
        fetchMessages();
    }, [isLogged, user, selectedContact]);

    return (
        <div className={`Chat${Object.keys(selectedContact).length === 0 && isLogged === true ? ' none-selected' : ''}`}>
            <ChatHeader isLogged={isLogged} selectedContact={selectedContact} />
            <ChatConversation isLogged={isLogged} user={user} messages={messages} />
            <ChatTyper setMessages={setMessages} user={user} selectedContact={selectedContact} />
        </div>
    )
}

export default Chat