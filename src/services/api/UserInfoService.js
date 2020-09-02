import axios from 'axios'
const tokens = JSON.parse(localStorage.getItem("tokens"))
export default {
    getUserInfo(id) {
        const result = axios({
            method: "get",
            url: process.env.VUE_APP_API_URL + "info/?user_id=" + id,
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            return response.data
        }).catch((response) => {
            return response.data
        })

        return result
    },
    postUserInfo(bodyFormData) {
        const result = axios({
            method: "post",
            url: process.env.VUE_APP_API_URL + "info/",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data", Authorization: "Bearer " + tokens.access, },
        }).then((response) => {
            return response.data
        }).catch((response) => { return response.data })
        return result
    },
    updateUserInfo(bodyFormData, userID) {
        const result = axios({
            method: "PUT", url: process.env.VUE_APP_API_URL + "info/" + userID + "/", data: bodyFormData, headers: {
                Authorization: "Bearer " + tokens.access,
            }
        })
            .then((response) => {
                return response.data
            }).catch((response) => { return response.data })

        return result
    }
}