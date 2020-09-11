import APIService from './APIService'
export default {
    getExperience(id){
        const result = APIService.get("experience/?user_id=" + id) 
        .then((response)=>{return response.data}).catch((response)=>{response.data})
    
        return result
    },
    postExperience(bodyFormData){
      const result = APIService.post("experience/",bodyFormData) 
      .then((response) => {
        return response.data
    }).catch((response) => { return response.data })
    return result
  },
  updateExperience(data, ID) {
    const result = APIService.put("experience/" + ID + "/",data)
   
        .then((response) => {
            return response.data
        }).catch((response) => { return response.data })

    return result
},
  deleteExperience(id){
    const result = APIService.delete("experience/"+id+ "/")
    .then((response)=>{return response.data}).catch((response)=>{response.data})
  
      return result
  }
}