import { combineReducers } from 'redux';
import { login } from './login'
import { users } from './users'
import { projectList } from './project-list'
import { projectBoard } from './project-board'
import { loader } from './loader'

export const reducers = combineReducers({
  login,
  users,
  projectList,
  projectBoard,
  loader
});
