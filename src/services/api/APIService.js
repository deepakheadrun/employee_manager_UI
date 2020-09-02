import axios from 'axios'

export default {
    get(url) {
        const response = axios({
            method: "get",
            url: process.env.VUE_APP_API_URL + url,
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            return response
        }).catch((error) => {
            return error;
        });
        return response
    },
    post(url, data) {
        const result = axios({
            method: "post",
            url: process.env.VUE_APP_API_URL + url,
            data: data,
            headers: { "Content-Type": "multipart/form-data", },
        }).then((response) => {
            return response.data
        }).catch((response) => { return response.data })
        return result
    },
    put(url, data) {
        const result = axios({
            method: "PUT", url: process.env.VUE_APP_API_URL + url, data: data,
        })
            .then((response) => {
                return response
            }).catch((response) => { return response })

        return result
    },
    delete(url) {
        const response = axios({
            method: "DELETE",
            url: process.env.VUE_APP_API_URL + url,
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            return response
        }).catch((error) => {
            return error;
        });
        return response
    }
}