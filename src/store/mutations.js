import {
    UPDATE_LOADING,
    SAVED_USERINFO,
    REMOVE_USERINFO,
    ADD_PEICAI,
    UPDATE_PEICAI
} from './mutation-types'

export default {
    [UPDATE_LOADING](state, status) {
        state.isLoading = status
    },
    [SAVED_USERINFO](state, userinfo) {
        state.userinfo = userinfo
    },
    [REMOVE_USERINFO](state) {
        state.userinfo = null
    },
    [ADD_PEICAI](state, payload) {
        state.peicai[payload.key].push(payload.item)
    },
    [UPDATE_PEICAI](state, payload) {

    }
}