import axios from 'axios'
import { browserHistory } from 'react-router'

import * as types from '../action-types'

const saveProjectRequest = () => ({
  type: types.SAVE_PROJECT_REQUEST
})

const saveProjectSuccess = (data) => ({
  type: types.SAVE_PROJECT_SUCCESS,
  projects: data.projects
})

const saveProjectFailure = (error) => ({
  type: types.SAVE_PROJECT_FAILURE,
  error
})

export const saveProject = (project) => {
  return (dispatch) => {
    dispatch(saveProjectRequest())
    axios.post('/project/add', { project })
      .then((response) => {
        dispatch(saveProjectSuccess(response.data))
        return Promise.resolve()
      })
      .catch((error) => {
        dispatch(saveProjectFailure(error))
        return Promise.reject()
      })
  }
}

const deleteProjectRequest = () => ({
  type: types.DELETE_PROJECT_REQUEST
})

const deleteProjectSuccess = (data) => ({
  type: types.DELETE_PROJECT_SUCCESS,
  projects: data.projects
})

const deleteProjectFailure = (error) => ({
  type: types.DELETE_PROJECT_FAILURE,
  error
})

export const deleteProject = (id) => {
  return (dispatch) => {
    dispatch(deleteProjectRequest())
    axios.post('/project/delete', { id })
      .then((response) => {
        dispatch(deleteProjectSuccess(response.data))
        return Promise.resolve()
      })
      .catch((error) => {
        dispatch(deleteProjectFailure(error))
        return Promise.reject()
      })
  }
}
