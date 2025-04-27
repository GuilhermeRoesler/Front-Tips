import React, { useState, useRef } from 'react'
import Message from './WhatsAppWeb/Message.js'
import Contact from './WhatsAppWeb/Contact.js'

const WhatsAppWeb = () => {
    const inputRef = useRef(null)
    const [messages, setMessages] = useState([
        {
            content: 'Olá, tudo bem?',
            type: 'sent',
            timestamp: '10:00'
        },
        {
            content: 'Tudo sim',
            type: 'received',
            timestamp: '10:02'
        },
        {
            content: 'E você?',
            type: 'received',
            timestamp: '10:02'
        }
    ])
    const [contacts, setContacts] = useState([
        {
            name: 'João',
            lastMessage: 'Olá, tudo bem?',
            lastMessageTime: '10:00'
        },
        {
            name: 'Maria',
            lastMessage: 'Tudo sim',
            lastMessageTime: '10:02'
        },
        {
            name: 'Pedro',
            lastMessage: 'E você?',
            lastMessageTime: '10:02'
        }
    ])

    const handleSend = () => {
        const content = inputRef.current.value
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})
        console.log(timestamp)
        setMessages([...messages, { content, type: 'sent', timestamp }])
        
        inputRef.current.value = ''
        inputRef.current.focus()
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSend()
        }
    }

    return (
        <>
            <h1>WhatsApp Web</h1>
            <section id='WhatsAppWeb'>
                <div className="card">
                    <div className="contacts">
                        <div className="contacts">
                            <p>Contacts</p>
                            <Contact name='João' />
                        </div>
                    </div>
                    <div className="body">
                        <div className="top-conversation"></div>
                        <div className="chat">
                            {messages.map((message, index) => (
                                <Message key={index} content={message.content} type={message.type} timestamp={message.timestamp} />
                            ))}
                        </div>
                        <div className="typer">
                            <input ref={inputRef} type="text" placeholder='Type a message' onKeyDown={handleKeyDown} />
                            <button onClick={handleSend}><i class="material-symbols-outlined">send</i></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhatsAppWeb