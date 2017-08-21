import _ from 'lodash'

import base from './base.json'
import header from './header.json'
import task from './task.json'
import board from './board.json'
import projects from './projects.json'

export const messages = _.extend(
  {},
  base,
  header,
  task,
  board,
  projects
)
