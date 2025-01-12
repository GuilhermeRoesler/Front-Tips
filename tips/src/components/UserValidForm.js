import React from 'react'

const UserValidForm = () => {
    return (
        <>
            <h1>User Valid Form</h1>
            <section id="user-valid-form">
                <form action="">
                    <label htmlFor="">Name</label>
                    <input required type="text" placeholder="Name" />
                    <label htmlFor="">Email</label>
                    <input required type="email" placeholder="Email" />
                    <label htmlFor="">Password</label>
                    <input required type="password" placeholder="Password" />
                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    )
}

export default UserValidForm;