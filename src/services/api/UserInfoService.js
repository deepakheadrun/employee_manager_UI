import APIService from './APIService'

export default {
    
  getUserInfo(id) {
    const response =
      APIService.get("info/?user_id=" + id).then((response) => {
        return response.data
      })
    return response
  },
   
    postUserInfo(data) {
        const response =  APIService.post("info/",data) .then((response) => {
            return response.data
          }).catch((response) => { return response.data })
         
        return response
    },
    updateUserInfo(data, ID) {
        const result = APIService.put("info/" + ID + "/",data)
       
            .then((response) => {
                return response.data
            }).catch((response) => { return response.data })

        return result
    }
}