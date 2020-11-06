import Cookies from 'universal-cookie';
import api from './api';

let cookies = new Cookies();

let config = {
    headers: {
        'Api-Version': '1.0',
        'Authorization': `Bearer ${cookies.get('token')}`
    }
}

export async function login(data) {
    try {
        let result = await api.post('/v1/auth/login', data)

        return result
    } catch (error) {
        console.log("Error Login: ", error);

        throw error
    }
}

export async function register(data) {
    try {
        let result = await api.post('/v1/auth/register', data)

        return result
    } catch (error) {
        console.log("Error Register: ", error);

        throw error
    }
}

export async function loginGoogle(data) {
    try {
        let result = await api.post('/v1/auth/google', data)

        return result
    } catch (error) {
        console.log("Error LoginGoogle: ", error);

        throw error
    }
}

export async function loginFacebook(data) {
    try {
        let result = await api.post('/v1/auth/facebook', data)

        return result
    } catch (error) {
        console.log("Error LoginFacebook: ", error);

        throw error
    }
}

export async function updatePassword(data) {
    try {
        let result = await api.put('/v1/auth/reset-password-profile', data, config)

        return result
    } catch (error) {
        console.log("Error UpdatePassword: ", error);

        throw error
    }
}

export async function recoverPassword(data) {
    try {
        let result = await api.post('/v1/auth/reset-password', data)

        return result
    } catch (error) {
        console.log("Error RecoverPassword: ", error);

        throw error
    }
}

export async function signOut() {
    try {
        let data = {
            refresh_token: cookies.get('refreshToken'),
        }

        let result = await api.post('/v1/auth/logout', data, config)

        cookies.remove('refreshToken');
        cookies.remove('token');

        setTimeout(() => document.location.reload(), 300)

        return result
    } catch (error) {
        console.log("Error SignOut: ", error);

        cookies.remove('refreshToken');
        cookies.remove('token');

        setTimeout(() => document.location.reload(), 300)

        throw error
    }
}

export default { signOut, login, register, updatePassword, recoverPassword, loginGoogle, loginFacebook }