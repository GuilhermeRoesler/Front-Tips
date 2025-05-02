import React from 'react'

const AuthForm = ({ title, buttonText, onSubmit, children }) => {
    return (
        <>
            {/* <div className='shade'></div> */}
            <div className="AuthForm">
                <h2>{title}</h2>
                <form onSubmit={onSubmit}>
                    {children}
                    <button type="submit">{buttonText}</button>
                </form>
            </div>
        </>
    )
}

export default AuthForm