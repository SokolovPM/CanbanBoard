import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

import { selectors, actions } from 'src/__data__'
import { Row } from 'src/core_modules'

import { Project } from './project'
import style from './style.css'

const mapStateToProps = (state) => ({
  projects: selectors.projectList.getProjectList(state)
})

const mapDispatchToProps = (dispatch) => ({
  onSelectProject: (id) => dispatch(actions.selectProject(id)),
  onDeleteProject: (id) => dispatch(actions.deleteProject(id))
})

export const ProjectList = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ projects, onSelectProject, onDeleteProject }) => (
  <Row>
    {_.map(projects, (project, index) => (
      <Project
        key={index}
        project={project}
        onSelectProject={onSelectProject}
        onDeleteProject={onDeleteProject}
      />
    ))}
  </Row>
))
