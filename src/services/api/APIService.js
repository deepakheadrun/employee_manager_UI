import axios from 'axios'
import store from './../../store'
export default {
    get(url) {
        store.dispatch("setLoading", true);
        const response = axios({
            method: "get",
            url: process.env.VUE_APP_API_URL + url,
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            store.dispatch("setLoading", false);
            return response
        }).catch((error) => {
            store.dispatch("setLoading", false);
            return error;
        });
        return response
    },
    post(url, data) {
        store.dispatch("setLoading", true);
        const result = axios({
            method: "post",
            url: process.env.VUE_APP_API_URL + url,
            data: data,
            headers: { "Content-Type": "multipart/form-data", },
        }).then((response) => {
            store.dispatch("setLoading", false);
            return response
        }).catch((response) => {store.dispatch("setLoading", false); return response })
        return result
    },
    put(url, data) {
        store.dispatch("setLoading", true);
        const result = axios({
            method: "PUT", url: process.env.VUE_APP_API_URL + url, data: data,
        })
            .then((response) => {
                store.dispatch("setLoading", false);
                return response
            }).catch((response) => { store.dispatch("setLoading", false); return response })

        return result
    },
    delete(url) {
        this.$store.dispatch("setLoading", true);
        const response = axios({
            method: "DELETE",
            url: process.env.VUE_APP_API_URL + url,
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            this.$store.dispatch("setLoading", false);
            return response
        }).catch((error) => {
            this.$store.dispatch("setLoading", false);
            return error;
        });
        return response
    }
}