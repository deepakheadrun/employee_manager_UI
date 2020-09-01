import axios from 'axios'

const tokens = JSON.parse(localStorage.getItem("tokens"))
export default {
    
    getUsers(){
        
        const response = axios({
            method: "get",
            url: process.env.VUE_APP_API_URL + "user/",
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: "Bearer " + tokens.access,
            },
          }).then((response)=>{    
              return response.data})
        return response
    }
}