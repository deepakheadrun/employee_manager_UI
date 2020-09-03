import APIService from './APIService'
export default {
    getPerformance(id){
      const result = APIService.get("performance/?user_id=" + id)
       .then((response)=>{return response.data}).catch((response)=>{response.data})
    
        return result
    },
    postPerformance(bodyFormData){
        const result = APIService.post("performance/",bodyFormData)
         .then((response)=>{return response.data}).catch((response)=>{response.data})
      
          return result
      },
      updatePerformance(bodyFormData,id){
        const result = APIService.put("performance/" + id + "/",bodyFormData)
        .then((response)=>{return response.data}).catch((response)=>{response.data})
     
         return result
      }
}
