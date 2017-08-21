import { createSelector } from 'reselect'
import { flagSelector } from '../selector-utils'
import _ from 'lodash'

const projectListSlice = (state) => state.projectList

const listSlice = flagSelector(projectListSlice, 'list')
const selectedProjectSlice = flagSelector(projectListSlice, 'selectedProject')

export const getProjectList = createSelector(
  listSlice,
  (list) => list
)

export const getSelectedProject = createSelector(
  selectedProjectSlice,
  (id) => id
)

export const getProject = createSelector(
  getProjectList,
  getSelectedProject,
  (list, code) => _.find(list, (elem) => elem.code === code)
)

export const isProjectSelect = createSelector(
  selectedProjectSlice,
  (code) => !!code
)
