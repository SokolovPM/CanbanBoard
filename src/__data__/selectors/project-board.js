import { createSelector } from 'reselect'
import { flagSelector } from '../selector-utils'
import _ from 'lodash'

const projectBoardSlice = (state) => state.projectBoard

const tasksSlice = flagSelector(projectBoardSlice, 'tasks')
const selectedTasksSlice = flagSelector(projectBoardSlice, 'selectedTask')

export const getTaskList = createSelector(
  tasksSlice,
  (tasks) => tasks
)

export const getTasksByStatus = (state, status) => {
  return _.filter(getTaskList(state), (elem) => elem.status === status)
}


export const getSelectedTask = createSelector(
  tasksSlice,
  selectedTasksSlice,
  (tasks, id) => _.find(tasks, (task) => task._id === id)
)

export const isTaskSelect = createSelector(
  selectedTasksSlice,
  (id) => !!id
)
