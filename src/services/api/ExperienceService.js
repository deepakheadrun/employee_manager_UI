import axios from 'axios'
const tokens = JSON.parse(localStorage.getItem("tokens"))
export default {
    getExperience(id){
        const result =  axios
        .get(process.env.VUE_APP_API_URL + "experience/?user_id=" + id, {
          headers: {
            Authorization: "Bearer " + tokens.access,
          },
        }).then((response)=>{return response.data}).catch((response)=>{response.data})
    
        return result
    }
}