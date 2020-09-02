import APIService from './APIService'

export default {

  getUsers() {
    const response =
      APIService.get("user/").then((response) => {
        return response.data
      })
    return response
  },
  getLogedInUser(){
    const response = APIService.get("rest-auth/user/").then((response)=>{
      return response.data
    })

    return response
  },
  updateUser(data) {
    const result = APIService.put("rest-auth/user/", data)
      .then((response) => {
        return response.data
      }).catch((response) => { return response.data })

    return result
  },
  addUser(data){
    const result = APIService.post("accounts/register/", data)
      .then((response) => {
        return response.data
      }).catch((response) => { return response.data })

    return result
  }
}