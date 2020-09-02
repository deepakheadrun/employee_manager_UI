import APIService from './APIService'
export default {
    getPerformance(id){
      const result = APIService.get("performance/?user_id=" + id)
       .then((response)=>{return response.data}).catch((response)=>{response.data})
    
        return result
    }
}
