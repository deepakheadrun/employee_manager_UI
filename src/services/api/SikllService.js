import APIService from './APIService'

export default {
  getSkills(id) {
    const response =
      APIService.get("skill/?user_id=" + id).then((response) => {
        return response.data
      })
    return response
  },
  postSkill(bodyFormData){
    const result = APIService.post("skill/",bodyFormData) 
      .then((response) => {
        return response.data
    }).catch((response) => { return response.data })
    return result
  },
  deleteSkill(id){
    const result = APIService.delete("skill/" + id + "/") 
      .then((response) => {
        return response.data
    }).catch((response) => { return response.data })
    return result
  }
}