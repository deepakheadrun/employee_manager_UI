import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        role:null,
        logedInUser:null,
    },
    getters:{

    },
    mutations:{
        SetUserRole(state, role){
            
            state.role = role
           
        },
        SetLogedInUserRole(state, info){
         
            state.logedInUser = info
          
        }
    },
    actions:{
        setUserRole({commit}, role){
            commit('SetUserRole', role)
        },
        setLogedInUserRole({commit}, info){
            commit('SetLogedInUserRole', info)
        }
    }
})