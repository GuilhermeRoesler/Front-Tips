import React from 'react'

const SuccessMessage = ({ message, setMessage }) => {
    return (
        <div className='success-message'>
            <p>{message}</p>
            <button onClick={() => setMessage('')}>Ok</button>
        </div>
    )
}

export default SuccessMessage