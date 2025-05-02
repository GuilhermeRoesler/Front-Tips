import React from 'react'

const Register = ({ setType }) => {
    const handleChangeType = () => {
        setType('login')
    }

    return (
        <>
            <div className='shade'></div>
            <div className='register'>
                <h1>Register</h1>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Name' />
                    <label htmlFor="">Phone</label>
                    <input type="text" placeholder='Phone' />
                    <label htmlFor="">Password</label>
                    <input type="text" placeholder='Password' />
                    <label htmlFor="">Confirm Password</label>
                    <input type="text" placeholder='Confirm Password' />
                </div>
                <div className='picture'>
                    <label htmlFor="">Profile Picture</label>
                    <input type="file" />
                </div>
                <div>
                    <button>Register</button>
                    <p>Already have an account?</p>
                    <button onClick={handleChangeType}>Login here!</button>
                </div>
            </div>
            <div className="login-shadow"></div>
        </>
    )
}

export default Register