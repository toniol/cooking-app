import { UPDATE_LOADING } from './mutation-types'

export default {
  [UPDATE_LOADING](state, status){
    state.isLoading = status  
  }
}