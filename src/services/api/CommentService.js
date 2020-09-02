import APIService from './APIService'
export default {
    getComments(id){
        const result = APIService.get("comment/?user_id=" + id)
        .then((response)=>{return response.data}).catch((response)=>{response.data})
    
        return result
    }
}