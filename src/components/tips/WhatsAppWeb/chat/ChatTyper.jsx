import React, { useRef } from 'react'
import { sendMessage } from '../../../../services/api'

const ChatTyper = ({ setMessages, user, selectedContact }) => {
    const inputRef = useRef(null)
    const handleSend = async () => {
        if (inputRef.current.value.trim() === '') return

        const content = inputRef.current.value
        const data = {
            content: content,
            sender: user.id,
            conversation: selectedContact.conversation_id
        }
        const response = await sendMessage(data)
        console.log(response.data)

        if (response.status === 201) {
            setMessages((prevMessages) => [...prevMessages, response.data])
        }

        inputRef.current.value = ''
        inputRef.current.focus()
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSend()
        }
    }

    return (
        <div className="ChatTyper">
            <input ref={inputRef} onKeyDown={handleKeyDown} type="text" placeholder='Type a message' />
            <button onClick={handleSend}><i class="material-symbols-outlined">send</i></button>
        </div>
    )
}

export default ChatTyper