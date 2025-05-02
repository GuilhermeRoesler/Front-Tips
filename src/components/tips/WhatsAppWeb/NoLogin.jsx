import React, { useState } from 'react'
import Contact from './Contact'
import Message from './Message'
import Login from './Login'
import Register from './Register'

const NoLogin = ({ type, setType, setIsLogged }) => {
    const [messages] = useState([
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

    return (
        <div className="card">
            {
                type === 'login' ? <Login setType={setType} setIsLogged={setIsLogged} /> :
                type === 'register' ? <Register setType={setType} /> :
                <div>Não encontrado</div>
            }
            <div className="config">

            </div>
            <div className="contacts">
                <p>Contacts</p>
                <Contact name='João' />
                <Contact name='Maria' />
            </div>
            <div className="conversation">
                <div className="header">
                    <div className='no-profile-picture'></div>
                    <div>
                        <p>João</p>
                        <p>Online</p>
                    </div>
                </div>
                <div className="chat">
                    {messages.map((message, index) => (
                        <Message key={index} content={message.content} type={message.type} timestamp={message.timestamp} />
                    ))}
                </div>
                <div className="typer">
                    <input type="text" placeholder='Type a message' />
                    <button><i class="material-symbols-outlined">send</i></button>
                </div>
            </div>
        </div>
    )
}

export default NoLogin