import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     isAuthenticated:false
  },
  mutations: {
    check(state,app){
      if(app.$session.exists("token")){
        state.isAuthenticated=true
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
