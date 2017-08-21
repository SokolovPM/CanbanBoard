import { Map } from 'immutable'

import * as types from '../action-types'

const initialState = Map({
  isLoading: false,
  error: false,
  tasks: [],
  selectedTask: ''
})

export const projectBoard = (state = initialState, action) => {
  switch (action.type) {
  case types.PROJECT_BOARD_FETCH_REQUEST:
    return state.set('isLoading', true)
  case types.PROJECT_BOARD_FETCH_SUCCESS:
  case types.SAVE_TASK_SUCCESS:
  case types.DELETE_TASK_SUCCESS:
    return state
      .set('isLoading', false)
      .set('tasks', action.tasks)
  case types.PROJECT_BOARD_FETCH_FAILURE:
    return state
      .set('error', action.error)
  default:
    return state
  }
}
