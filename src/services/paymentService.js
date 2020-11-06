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

export async function paymentDonate(id, data) {
    try {
        let result = await api.post(`/v1/campaign/donate/${id}`, data)

        return result
    } catch (error) {
        console.log("Error PaymentDonate: ", error.response);
        errorAutentication(error)
        throw error
    }
}

export default { paymentDonate }