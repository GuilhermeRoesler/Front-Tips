import React, { useState, useEffect } from 'react'
import ConversationItem from './ConversationItem'
import { getContacts } from '../../../../services/api'

const ConversationList = ({ isLogged, user, setSelectedContact }) => {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        const fetchContacts = async () => {
            if (!isLogged || !user) return;

            try {
                // setIsLoading(true);
                // setError(null);
                const response = await getContacts(user.id);
                setContacts(response.data);
            } catch (err) {
                // setError('Erro ao carregar contatos: ' + err.message);
                console.error('Erro ao buscar contatos:', err);
            } finally {
                // setIsLoading(false);
            }
        };
        fetchContacts();
    }, [isLogged, user]);

    return (
        <div className="ConversationList">
            <h2>Conversations</h2>
            {!isLogged ? (<>
                <ConversationItem name='João' lastMessage='E você?' lastMessageTimestamp='10:02' />
                <ConversationItem name='Maria' lastMessage='E onde está?' lastMessageTimestamp='08:57' />
            </>) : (<>
                {contacts.map((contact) => (
                    <ConversationItem
                        key={contact.conversation_id}
                        name={contact.nickname}
                        conversation_id={contact.conversation_id}
                        lastMessage={contact.last_message || 'sim'}
                        lastMessageTimestamp={contact.timestamp || '00:00'}
                        setSelectedContact={setSelectedContact} />
                ))}
            </>)}
        </div>
    )
}

export default ConversationList