import APIService from './APIService'
export default {
    getExperience(id){
        const result = APIService.get("experience/?user_id=" + id) 
        .then((response)=>{return response.data}).catch((response)=>{response.data})
    
        return result
    }
}