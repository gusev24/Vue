import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    usersList: []
  },
  mutations: {
    setUsers (state, data) {
      state.usersList = data.results
    }
  },
  getters: {
    getUsers (state) {
      return state.usersList
    }
  }
})

export default store
