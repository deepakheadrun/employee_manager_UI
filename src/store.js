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
        },
        SetLoading(state, isLoading){        
            state.isLoading = isLoading
        },
        SetSelectedUser(state, info){
            state.selectedUser = info
        }
    },
    actions:{
        setUserRole({commit}, role){
            commit('SetUserRole', role)
        },
        setLogedInUserRole({commit}, info){
            commit('SetLogedInUserRole', info)
        },
        setLoading({commit}, isLoading){
            commit('SetLoading', isLoading)
        },
        setSelectedUser({commit}, info){
            commit('SetSelectedUser', info)
        },
    }
})