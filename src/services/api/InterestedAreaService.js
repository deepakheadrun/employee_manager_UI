import APIService from './APIService'

export default {
    getInterestedArea(id){
      const result = APIService.get("interested_area/?user_id=" + id)
     .then((response)=>{return response.data}).catch((response)=>{response.data})
    
        return result
    },
    postInterestedArea(bodyFormData){
      const result = APIService.post("interested_area/",bodyFormData) 
        .then((response) => {
          return response.data
      }).catch((response) => { return response.data })
      return result
    }
}