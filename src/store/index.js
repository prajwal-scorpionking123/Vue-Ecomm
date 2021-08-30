import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     isAuthenticated:false,
     carts:new Map(),
     size:0
  },
  mutations: {
    check(state,app){
      if(app.$session.exists("username")){
        state.isAuthenticated=true
      }
    },
    addToCart(state,product){
      if(!state.carts.get(product.product)){
        state.size++
      }
           state.carts.set(product.product,product)
    }
  },
  getters:{
    countCartItems:state=>{
      return state.size
    }
  },
  actions: {
  },
  modules: {
  }
})
