import * as types from '../action-types'
import axios from 'axios'

import { projectBoardFetch } from './project-board'

const projectListFetchRequest = () => ({
  type: types.PROJECT_LIST_FETCH_REQUEST
})

const projectListFetchSuccess = (data) => {
  return {
    type: types.PROJECT_LIST_FETCH_SUCCESS,
    projects: data.projects
  }
}

const getCookie = (name) => {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

const getUserLogin = () => {
    const login = getCookie('user')
    return {
      type: types.LOGIN_SUCCESS,
      login
    }
}

const projectListFetchFailure = () => ({
  type: types.PROJECT_LIST_FETCH_FAILURE
})

const userListFetchSuccess = (data) => ({
  type: types.USER_LIST_FETCH_SUCCESS,
  users: data.users
})

export const projectListFetch = () => {
  return (dispatch) => {
    dispatch(projectListFetchRequest())
    axios.post('/projects', {})
      .then((response) => {
        dispatch(getUserLogin())
        dispatch(projectListFetchSuccess(response.data))
        dispatch(userListFetchSuccess(response.data))
        return Promise.resolve()
      })
      .catch((error) => {
        dispatch(projectListFetchFailure())
        return Promise.reject(error)
      })
  }
}

const select = (id) => ({
  type: types.SELECT_PROJECT,
  id
})

export const selectProject = (id) => {
  return (dispatch) => {
    dispatch(select(id))
    return dispatch(projectBoardFetch(id))
  }
}
