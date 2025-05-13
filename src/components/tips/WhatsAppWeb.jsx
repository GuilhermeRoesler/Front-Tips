import React, { useState, useEffect } from 'react'
import AuthForm from './WhatsAppWeb/AuthForm'
import Chat from './WhatsAppWeb/Chat'
import Sidebar from './WhatsAppWeb/Sidebar'

const WhatsAppWeb = () => {
    const [isLogged, setIsLogged] = useState(false)
    const [user, setUser] = useState({})
    const [selectedContact, setSelectedContact] = useState({})
    const [sidebarIndex, setSidebarIndex] = useState(0)

    return (
        <>
            <div className="card">
                <Sidebar
                    secondaryTabIndex={sidebarIndex}
                    setSecondaryTabIndex={setSidebarIndex}
                    isLogged={isLogged}
                    user={user}
                    setSelectedContact={setSelectedContact}
                />
                <Chat
                    isLogged={isLogged}
                    user={user}
                    selectedContact={selectedContact}
                />
                {!isLogged && <AuthForm setIsLogged={setIsLogged} setUser={setUser} />}
            </div>
        </>
    )
}

export default WhatsAppWeb