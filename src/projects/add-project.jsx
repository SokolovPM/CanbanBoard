import React, { Component } from 'react'

import { Text } from 'src/core_modules'

import { InputProject } from './input-project'
import style from './style.css'

export class AddProject extends Component {
  state = {
    showNewProjectForm: false
  }

  handleAddProject = () => {
    this.setState({ showNewProjectForm: true })
  }

  handleClose = () => {
    this.setState({ showNewProjectForm: false })
  }

  render () {
    return (
      <div>
        <h1 className={style.control}>
          <Text
            className={style.controlText}
            $={'canban.projects.button.add'}
            onClick={this.handleAddProject}
          />
        </h1>
        {this.state.showNewProjectForm &&
          <InputProject close={this.handleClose} />
        }
      </div>
    )
  }
}
