import { UPDATE_LOADING, SAVED_USERINFO, REMOVE_USERINFO } from './mutation-types'

export default {
    [UPDATE_LOADING](state, status) {
        state.isLoading = status
    },
    [SAVED_USERINFO](state, userinfo) {
        state.userinfo = userinfo
    },
    [REMOVE_USERINFO](state) {
        state.userinfo = null
    }
}