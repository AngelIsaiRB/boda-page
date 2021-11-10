import { createStore } from 'vuex'

export default createStore({
  state: {
    isDay:true
  },
  mutations: {
    setIsDay(state,payload){
      state.isDay = payload
    }
  },
  actions: {
    onChangeIsDay({commit},payload){
      commit('setIsDay',payload)
    }
  },
  getters:{
    getIsDay: (state)=>state.isDay
  },
  modules: {
  }
})
