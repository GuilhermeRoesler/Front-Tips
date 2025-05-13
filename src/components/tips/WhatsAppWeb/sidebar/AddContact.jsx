import React, { useRef } from 'react'
import { addContact } from '../../../../services/api'

const AddContact = ({ user }) => {
    const nameRef = useRef()
    const phoneRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {
            owner: user.id,
            contact_phone: phoneRef.current.value,
            nickname: nameRef.current.value,
        }

        const response = await addContact(data)
        console.log(response)

        if (response.status === 201) {
            nameRef.current.value = ''
            phoneRef.current.value = ''
        }
    }

    return (
        <div className="AddContact">
            <h2>New Contact</h2>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input ref={nameRef} type="text" />
                <label>Phone Number</label>
                <input ref={phoneRef} type="text" />
                <button>Add Contact</button>
            </form>
        </div>
    )
}

export default AddContact