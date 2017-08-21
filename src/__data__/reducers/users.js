import * as types from '../action-types'

export const users = (state = [], action) => {
  switch (action.type) {
  case types.USER_LIST_FETCH_SUCCESS:
    return action.users
  default:
    return state
  }
}
