import React, { useState, useRef } from 'react'
import axios from 'axios'
import Message from './WhatsAppWeb/Message'
import Contact from './WhatsAppWeb/Contact'
import NoLogin from './WhatsAppWeb/NoLogin'

const WhatsAppWeb = () => {
    const inputRef = useRef(null)
    const [typeNoLogin, setTypeNoLogin] = useState('login')
    const [isLogged, setIsLogged] = useState(false)

    const handleSend = () => {
        if (inputRef.current.value.trim() === '') return

        const content = inputRef.current.value
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
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

    const handleSend2 = async () => {
        const body = {
            "name": "Guilherme",
            "phone": "00000100",
            "password": "1234",
            "is_online": true
        }
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/`, body)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    const login = async () => {
        const body = {
            "phone": "00000100",
            "password": "1234"
        }
        try {
            const response = await axios.post(`${API_URL}/token/`, body)

            const { access, refresh } = response.data
            console.log('Token de acesso:', access);
            console.log('Token de refresh:', refresh);

            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    if (!isLogged) {
        return (
            <>
                <h1>WhatsApp Web</h1>
                <section id='WhatsAppWeb'>
                    <NoLogin type={typeNoLogin} setType={setTypeNoLogin} setIsLogged={setIsLogged} />
                </section>
            </>
        )
    }

    return (
        <>
            <h1>WhatsApp Web</h1>
            <section id='WhatsAppWeb'>
                <div className="card">
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
                        </div>
                        <div className="typer">
                            <input type="text" placeholder='Type a message' />
                            <button><i class="material-symbols-outlined">send</i></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhatsAppWeb