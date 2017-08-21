import React from 'react'

import { AddProject } from './add-project'
import { ProjectList } from './project-list'
import {plus} from '../icons'

export const Projects = ({ projects, onSelectProject }) => (
  <div>
    <AddProject />
    <ProjectList />
  </div>
)
