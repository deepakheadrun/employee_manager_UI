import APIService from './APIService'
export default {
    getComments(id){
        const result = APIService.get("comment/?user_id=" + id)
        .then((response)=>{return response.data}).catch((response)=>{response.data})
    
        return result
    },
    postComment(bodyFormData){
        const result = APIService.post("comment/",bodyFormData)
         .then((response)=>{return response.data}).catch((response)=>{response.data})
      
          return result
      },
      updateComment(bodyFormData,id){
        const result = APIService.put("comment/" + id + "/",bodyFormData)
        .then((response)=>{return response.data}).catch((response)=>{response.data})
     
         return result
      }
}