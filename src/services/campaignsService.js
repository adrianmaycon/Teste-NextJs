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
            .catch(error => { console.log('Error: ', error) })
    }
}

export async function getCampaign(id) {
    try {
        let result = await api.get(`/v1/campaign/${id}`, config)

        return result
    } catch (error) {
        console.log("Error GetCampaign: ", error.response);
        errorAutentication(error)
        throw error
    }
}

export async function getCampaignUrl(url) {
    try {
        let result = await api.get(`/v1/campaign/url/${url}`)

        return result
    } catch (error) {
        console.log("Error GetCampaignUrl: ", error.response);
        throw error
    }
}

export async function campaignStep1(data) {
    try {
        let result = await api.post('/v1/campaign/step1', data, config)

        return result
    } catch (error) {
        console.log("Error CampaignStep1: ", error.response);
        errorAutentication(error)
        throw error
    }
}

export async function campaignStep2Draft(data, id) {
    try {
        let result = await api.post(`/v1/campaign/step2/${id}`, data, config)

        return result
    } catch (error) {
        console.log("Error CampaignStep2Draft: ", error.response);
        errorAutentication(error)
        throw error
    }
}

export async function campaignStep2(data, id) {
    try {
        let result = await api.post(`/v1/campaign/step2-finish/${id}`, data, config)

        return result
    } catch (error) {
        console.log("Error CampaignStep2: ", error.response);
        errorAutentication(error)
        throw error
    }
}

export async function campaignUpdateList(id, limit = 5) {
    try {
        let result = await api.get(`/v1/campaign/update/${id}?page=1&limit=${limit}`)

        return result
    } catch (error) {
        console.log("Error CampaignUpdateList: ", error.response);
        throw error
    }
}

export async function campaignCommentList(id, limit = 5) {
    try {
        let result = await api.get(`/v1/campaign/comment/${id}?page=1&limit=${limit}`)

        return result
    } catch (error) {
        console.log("Error CampaignCommentList: ", error.response);
        throw error
    }
}

export default { getCampaign, getCampaignUrl, campaignStep1, campaignStep2Draft, campaignStep2, campaignUpdateList, campaignCommentList }