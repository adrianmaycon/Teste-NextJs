import Cookies from 'universal-cookie';
import api from './api';

let cookies = new Cookies();

let config = {
    headers: {
        'Api-Version': '1.0',
        'Authorization': `Bearer ${cookies.get('token')}`
    }
}

function errorAutentication(error) {
    if (error.response.status === 401) {
        let data = {
            refresh_token: cookies.get('refreshToken'),
        }
        api.post(`/v1/auth/refresh`, data)
            .then((response) => {
                cookies.set('refreshToken', response.data.data.refreshToken, { path: '/' })
                cookies.set('token', response.data.data.token, { path: '/' })
                setTimeout(() => document.location.reload(true), 300)
            })
            .catch(error => console.log('Error: ', error))
    }
}

export async function listReaward(id) {
    try {
        let result = await api.get(`/v1/campaign/reaward/all/${id}`)

        return result
    } catch (error) {
        console.log("Error ListReaward: ", error.response);
        errorAutentication(error)
        throw error
    }
}

export async function showReaward(idC, idR) {
    try {
        let result = await api.get(`/v1/campaign/reaward/${idC}/${idR}`, config)

        return result
    } catch (error) {
        console.log("Error ShowReaward: ", error.response);
        errorAutentication(error)
        throw error
    }
}

export async function submitReaward(data, id) {
    try {
        let result = await api.post(`/v1/campaign/reaward/${id}`, data, config)

        return result
    } catch (error) {
        console.log("Error SubmitReaward: ", error.response);
        errorAutentication(error)
        throw error
    }
}

export async function deleteReaward(idC, idR) {
    try {
        let result = await api.delete(`/v1/campaign/reaward/${idC}/${idR}`, config)

        return result
    } catch (error) {
        console.log("Error DeleteReaward: ", error.response);
        errorAutentication(error)
        throw error
    }
}

export async function updateReaward(data, idC, idR) {
    try {
        let result = await api.put(`/v1/campaign/reaward/${idC}/${idR}`, data, config)

        return result
    } catch (error) {
        console.log("Error UpdateReaward: ", error.response);
        errorAutentication(error)
        throw error
    }
}

export async function highlightReaward(idC, idR) {
    try {
        let result = await api.put(`/v1/campaign/reaward/highlight/${idC}/${idR}`, '', config)

        return result
    } catch (error) {
        console.log("Error highlightReaward: ", error.response);
        // errorAutentication(error)
        throw error
    }
}

export default { submitReaward, listReaward, showReaward, deleteReaward, updateReaward, highlightReaward }