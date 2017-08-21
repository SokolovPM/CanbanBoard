import * as types from '../action-types'

const initialState = ''

export const login = (state = initialState, action) => {
  switch (action.type) {
  case types.LOGIN_SUCCESS:
    return action.login
  default:
    return state;
  }
}
