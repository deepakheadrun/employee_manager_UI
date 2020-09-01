import axios from 'axios'
const tokens = JSON.parse(localStorage.getItem("tokens"))
export default {
    getInterestedArea(id){
        const result =  axios
        .get(process.env.VUE_APP_API_URL + "interested_area/" + id + "/", {
          headers: {
            Authorization: "Bearer " + tokens.access,
          },
        }).then((response)=>{return response.data}).catch((response)=>{response.data})
    
        return result
    }
}