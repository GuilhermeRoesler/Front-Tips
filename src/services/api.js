import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const login = async (data) => {
    const response = await axios.post(`${API_BASE_URL}/login/`, data);
    return response;
}