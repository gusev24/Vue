import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    usersList: {}
  },
  mutations: {
    setUsers (state, data) {
      state.usersList = data
    }
  },
  getters: {
    getUsers (state) {
      console.log(state.usersList.results)
      return state.usersList.results
    }
  }
})

export default store
