import { Map } from 'immutable'

import * as types from '../action-types'

const initialState = Map({
  isLoading: false,
  error: false,
  list: [],
  selectedProject: ''
})

export const projectList = (state = initialState, action) => {
  switch (action.type) {
  case types.PROJECT_LIST_FETCH_REQUEST:
    return state
      .set('isLoading', true)
  case types.PROJECT_LIST_FETCH_SUCCESS:
  case types.SAVE_PROJECT_SUCCESS:
  case types.DELETE_PROJECT_SUCCESS:
    return state
      .set('isLoading', false)
      .set('list', action.projects)
  case types.PROJECT_LIST_FETCH_FAILURE:
    return state
      .set('error', true)
  case types.SELECT_PROJECT:
    return state
      .set('selectedProject', action.id)
  default:
    return state
  }
}
