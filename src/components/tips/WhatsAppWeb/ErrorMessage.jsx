import React from 'react'

const ErrorMessage = ({ message, setError }) => {
    return (
        <div className='error-message'>
            <p>{message}</p>
            <button onClick={() => setError('')}>Tentar Novamente</button>
        </div>
    )
}

export default ErrorMessage