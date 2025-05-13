import React from 'react'

const UserValidForm = () => {
    return (
        <>
            <form action="">
                <label htmlFor="">Name</label>
                <input required type="text" placeholder="Name" />
                <label htmlFor="">Email</label>
                <input required type="email" placeholder="Email" />
                <label htmlFor="">Password</label>
                <input required type="password" placeholder="Password" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default UserValidForm;