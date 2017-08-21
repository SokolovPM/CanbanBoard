import axios from 'axios'
import _ from 'lodash'

import { selectors } from '../'
import * as types from '../action-types'

const saveTaskRequest = () => ({
  type: types.SAVE_TASK_REQUEST
})

const saveTaskSuccess = (data) => ({
  type: types.SAVE_TASK_SUCCESS,
  tasks: data.tasks
})

const saveTaskFailure = (error) => ({
  type: types.SAVE_TASK_FAILURE,
  error
})

export const saveTask = (task) => {
  return (dispatch, getState) => {
    const projectId = selectors.projectList.getSelectedProject(getState())
    task.projectId = projectId
    dispatch(saveTaskRequest())
    axios.post('/project/board/task/save', { task })
        .then((response) => {
          dispatch(saveTaskSuccess(response.data))
          return Promise.resolve()
        })
        .catch((error) => {
          dispatch(saveTaskFailure(error))
          return Promise.reject()
        })
  }
}

export const changeStatus = (task, status) => {
  task.status = status
  return saveTask(task)
}

export const changeSubtaskStatus = (task, subtask, status) => {
  _.find(task.subtasks, (value) => value.description === subtask.description).status = status
  return saveTask(task)
}

const deleteTaskRequest = () => ({
  type: types.DELETE_TASK_REQUEST
})

const deleteTaskSuccess = (data) => ({
  type: types.DELETE_TASK_SUCCESS,
  tasks: data.tasks
})

const deleteTaskFailure = (error) => ({
  type: types.DELETE_TASK_FAILURE,
  error
})

export const deleteTask = (task) => {
  return (dispatch) => {
    dispatch(deleteTaskRequest())
    axios.post('/project/board/task/delete', { task })
      .then((response) => {
        dispatch(deleteTaskSuccess(response.data))
        return Promise.resolve()
      })
      .catch((error) => {
        dispatch(deleteTaskFailure(error))
        return Promise.reject()
      })
  }
}
