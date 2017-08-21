import axios from 'axios'
import { browserHistory } from 'react-router'

import * as types from '../action-types'

const projectBoardFetchRequest = () => ({
  type: types.PROJECT_BOARD_FETCH_REQUEST
})

const projectBoardFetchSuccess = (data) => ({
  type: types.PROJECT_BOARD_FETCH_SUCCESS,
  tasks: data.tasks
})

const projectBoardFetchFailure = (error) => ({
  type: types.PROJECT_BOARD_FETCH_FAILURE,
  error
})

export const projectBoardFetch = (id) => {
  return (dispatch) => {
    dispatch(projectBoardFetchRequest())
    axios.post('/project/board', { id })
      .then((response) => {
        browserHistory.push('project/board')
        dispatch(projectBoardFetchSuccess(response.data))
        return Promise.resolve()
      })
      .catch((error) => {
        dispatch(projectBoardFetchFailure(error))
        return Promise.reject()
      })
  }
}
