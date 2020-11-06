import axios from 'axios';

const api = axios.create({
    baseURL: 'https://kickante-backend.herokuapp.com',
})

export default api;
