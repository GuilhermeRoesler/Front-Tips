import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const authenticate = async (data) => {
    console.log('aaaaaaaaaaaaa')
    try {
        const response = await axios.post(`${API_BASE_URL}/login/`, data);
        return response;
    } catch (error) {
        if (error.response) {
            return error.response;
        } else if (error.request) {
            console.error('Sem resposta do servidor');
        } else {
            console.error('Erro de configuração da requisição');
        }
    }
}

export const register = async (data) => {
    const response = await axios.post(`${API_BASE_URL}/users/`, data);
    return response;
}

export const getContacts = async (user_id) => {
    const params = {
        params: {
            user_id: user_id
        }
    }
    const response = await axios.get(`${API_BASE_URL}/get-conversations-by-user/`, params);
    console.log(response.data)
    return response;
}

export const getUserByIndex = async (index) => {
    const response = await axios.get(`${API_BASE_URL}/users/${index}/`);
    console.log(response.data)
    return response
}

export const getMessagesByConversation = async (conversation_id) => {
    const params = {
        params: {
            conversation_id: conversation_id
        }
    }
    const response = await axios.get(`${API_BASE_URL}/get-messages-by-conversation/`, params);
    console.log(response.data)
    return response;
}

export const sendMessage = async (data) => {
    const response = await axios.post(`${API_BASE_URL}/messages/`, data);
    return response;
}

export const addContact = async (data) => {
    const response = await axios.post(`${API_BASE_URL}/add-contact/`, data);
    return response;
}