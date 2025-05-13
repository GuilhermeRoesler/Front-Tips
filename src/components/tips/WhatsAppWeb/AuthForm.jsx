import React, { useState, useEffect } from 'react'
import { login_data, register_data } from '../../../data/WhatsAppWebData'
import { authenticate, register } from '../../../services/api'
import ErrorMessage from './ErrorMessage'
import SuccessMessage from './SuccessMessage'

const AuthForm = ({ setIsLogged, setUser }) => {
    const [authType, setAuthType] = useState('login')
    const [formData, setFormData] = useState({})
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const { title, fields, change_text } = authType === 'login' ? login_data : register_data

    const handleChangeType = () => {
        setAuthType(authType === 'login' ? 'register' : 'login')
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        console.log(formData)
    }

    useEffect(() => {
        // Inicializar o formData com campos vazios baseados no tipo atual
        const initialData = {}
        fields.forEach(field => {
            initialData[field.name] = ''
        })
        setFormData(initialData)
    }, [authType, fields])

    const handleLogin = async (e) => {
        e.preventDefault()
        const response = await authenticate(formData)

        if (response.status === 200) {
            const user = response.data.user

            setIsLogged(true)
            setUser(user)
        } else {
            setError("Usuário e/ou Senha Incorretos")
        }
    }

    const handleRegister = async (e) => {
        e.preventDefault()

        // Verifica se as senhas são iguais
        if (formData.password !== formData.confirmPassword) {
            setError('As senhas não coincidem')
            return
        }

        // Remove o campo confirmPassword do objeto formData
        const data = { ...formData }
        delete data.confirmPassword
        console.log(data)

        const response = await register(data)
        console.log(response)

        if (response.status === 201) {
            console.log('Registro inserido com sucesso!')
            setAuthType('login')
            setMessage('Registro realizado com sucesso!')
        } else {
            console.log('Erro ao inserir os dados')
        }
    }

    return (
        <>
            <div className='shade'></div>
            <div className={authType}>
                <h2>{title}</h2>
                <form onSubmit={authType === 'login' ? handleLogin : handleRegister}>
                    {fields.map((field, index) => (
                        <>
                            <label key={index} htmlFor={field.name}>{field.label}</label>
                            <input key={index + fields.length} type={field.type} name={field.name} placeholder={field.placeholder} onChange={handleInputChange} />
                        </>
                    ))}
                    <button type="submit">{title}</button>
                </form>
                <div>
                    <p>{change_text[0]}</p>
                    <button onClick={handleChangeType}>{change_text[1]}</button>
                </div>
            </div>
            <div className="auth-shadow"></div>
            {error && <ErrorMessage message={error} setError={setError} />}
            {message && <SuccessMessage message={message} setMessage={setMessage} />}
        </>
    )
}

export default AuthForm