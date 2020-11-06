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

export async function listBankAccount() {
    try {
        let result = await api.get('/v1/bankaccount', config)

        return result
    } catch (error) {
        console.log("Error ListBankAccount: ", error.response);
        errorAutentication(error)
        throw error
    }
}

export async function submitBankAccount(data) {
    try {
        let result = await api.post('/v1/bankaccount', data, config)

        return result
    } catch (error) {
        console.log("Error SubmitBankAccount: ", error.response);
        errorAutentication(error)
        throw error
    }
}

export async function deleteBankAccount() {
    try {
        let result = await api.delete('/v1/bankaccount', config)

        return result
    } catch (error) {
        console.log("Error DeleteBankAccount: ", error.response);
        errorAutentication(error)
        throw error
    }
}

export async function listCodeBank() {
    try {
        let result = await api.get('/v1/codebanks', config)

        return result
    } catch (error) {
        console.log("Error ListCodeBank: ", error.response);
        errorAutentication(error)
        throw error
    }
}

export async function listAddressBilling() {
    try {
        let result = await api.get('/v1/addressbilling', config)

        return result
    } catch (error) {
        console.log("Error ListAddressBilling: ", error.response);
        errorAutentication(error)
        throw error
    }
}

export async function submitAddressBilling(data) {
    try {
        let result = await api.post('/v1/addressbilling', data, config)

        return result
    } catch (error) {
        console.log("Error SubmitAddressBilling: ", error.response);
        errorAutentication(error)
        throw error
    }
}

export async function deleteAddressBilling() {
    try {
        let result = await api.delete('/v1/addressbilling', config)

        return result
    } catch (error) {
        console.log("Error DeleteAddressBilling: ", error.response);
        errorAutentication(error)
        throw error
    }
}

export async function listParcCred(data) {
    try {
        let result = await api.post('/v1/campaign/donate/step2/parcel', data)
        return result

    } catch (error) {
        console.log("Error ListParcCred: ", error.response);
        throw error
    }
}

export default { listBankAccount, submitBankAccount, deleteBankAccount, listCodeBank, listAddressBilling, submitAddressBilling, deleteAddressBilling, listParcCred }