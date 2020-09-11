import APIService from './APIService'

export default {

  getUserRole() {
    const response =
      APIService.get("role/").then((response) => {
        return response.data
      })
    return response
  },
}