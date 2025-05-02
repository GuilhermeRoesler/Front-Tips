import React, { useRef } from 'react'
import { login } from '../../../services/api'

const Login = ({ setType, setIsLogged }) => {
    const phoneRef = useRef(null)
    const passwordRef = useRef(null)

    const handleChangeType = () => {
        setType('register')
    }

    const handleLogin = async () => {
        const data = {
            phone: phoneRef.current.value,
            password: passwordRef.current.value
        }
        const response = await login(data)
        console.log(response)

        if (response.status === 200) {
            console.log('Login realizado com sucesso!')
            setIsLogged(true)
        } else {
            console.log('Erro ao fazer login')
        }
    }

    return (
        <>
            <div className='shade'></div>
            <div className='login'>
                <h1>Login</h1>
                <div>
                    <label htmlFor="">Phone</label>
                    <input ref={phoneRef} type="text" placeholder='Phone' />
                    <label htmlFor="">Password</label>
                    <input ref={passwordRef} type="text" placeholder='Password' />
                </div>
                <div>
                    <button onClick={handleLogin}>Login</button>
                    <p>Don’t have an account?</p>
                    <button onClick={handleChangeType}>Register here!</button>
                </div>
            </div>
            <div className="login-shadow"></div>
        </>
    )
}

export default Login