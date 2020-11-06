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
            .catch(error => {
                console.log('Error: ', error);
                cookies.remove('refreshToken');
                cookies.remove('token');
            })
    }
}

export async function refreshToken() {
    let data = {
        refresh_token: cookies.get('refreshToken'),
    }

    api.post(`/v1/auth/refresh`, data)
        .then((response) => {
            cookies.set('refreshToken', response.data.data.refreshToken, { path: '/' })
            cookies.set('token', response.data.data.token, { path: '/' })
        })
        .catch(error => {
            console.log('Error: ', error);
            cookies.remove('refreshToken');
            cookies.remove('token');
            setTimeout(() => document.location.reload(), 300)
        })
}

export async function basicUserInfoPag() {
    try {
        let resultInfo = await api.get('/v1/auth/info', config)

        return resultInfo
    } catch (error) {
        throw error
    }
}

export async function basicUserInfo() {
    try {
        let resultInfo = await api.get('/v1/auth/info', config)

        return resultInfo
    } catch (error) {
        console.log("Error BasicUserInfo: ", error.response);
        errorAutentication(error)
        throw error
    }
}

export async function profileInfo() {
    try {
        let resultProfile = await api.get('/v1/profile', config)

        return resultProfile
    } catch (error) {
        console.log("Error ProfileInfo: ", error.response);
        errorAutentication(error)
        throw error
    }
}

export async function editProfile(data) {
    try {
        let resultProfile = await api.post('/v1/profile', data, config)

        return resultProfile
    } catch (error) {
        console.log("Error ProfileInfo: ", error.response);
        errorAutentication(error)
        throw error
    }
}

export async function listCategories() {
    try {
        // api.get('/v1/categories?page=1&limit=5&title=ca')
        let resultCategories = await api.get('/v1/categories')

        return resultCategories
    } catch (error) {
        console.log("Error ListCategories: ", error.response);
        errorAutentication(error)
        throw error
    }
}

export async function uploadFile(file) {
    let config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${cookies.get('token')}`
        }
    }
    try {
        const formData = new FormData();
        formData.append('file', file)

        let result = await api.post('/v1/files', formData, config)

        return result
    } catch (error) {
        console.log("Error UploadFile: ", error);
        errorAutentication(error)
        throw error
    }
}

export async function putImage(data) {
    try {
        await api.put('/v1/profile/image', data, config)

        return true
    } catch (error) {
        console.log("Error PutImage: ", error.response);
        errorAutentication(error)
        throw error
    }
}

export async function deleImage() {
    try {
        await api.delete('/v1/profile/image', config)

        return true
    } catch (error) {
        console.log("Error DeleImage: ", error.response);
        errorAutentication(error)
        throw error
    }
}

export default { refreshToken, basicUserInfo, profileInfo, listCategories, editProfile, uploadFile, putImage, deleImage, basicUserInfoPag }