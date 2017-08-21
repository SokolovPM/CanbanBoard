import * as types from '../action-types'

export const loader = (state = false, action) => {
  switch (action.type) {
  case types.PROJECT_LIST_FETCH_REQUEST:
    return true
  default:
    return false
  }
}
