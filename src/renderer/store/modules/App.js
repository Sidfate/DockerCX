const state = {
  drawer: null
}

const mutations = {
  TOGGLE_DRAWER (state) {
    state.drawer = !state.drawer
  }
}

const actions = {
  toggleDrawer ({ commit }) {
    commit('TOGGLE_DRAWER')
  }
}

export default {
  state,
  mutations,
  actions
}
