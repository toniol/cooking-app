export default {
  showLoading: ({ commit }, param) => commit('UPDATE_LOADING', true),
  hideLoading: ({ commit }, param) => commit('UPDATE_LOADING', false), 
}