import React, { Component } from 'react'
import { browserHistory } from 'react-router'

import { Text, Icon } from 'src/core_modules'
import { InputTask } from './input-task'

import style from './style.css'

export class AddTask extends Component {
  state = {
    showNewTaskForm: false
  }

  handleAddTask = () => {
    this.setState({ showNewTaskForm: true })
  }

  handleClose = () => {
    this.setState({ showNewTaskForm: false})
  }

  handleHome = () => {
    browserHistory.push('/projects')
  }

  render () {
    return (
      <div>
        <h1 className={style.control}>
          <span
            className={style.controlIcon}
            onClick={this.handleHome}
          >
            <Icon name={'home'} />
          </span>
          <Text
            className={style.controlText}
            $={'canban.board.button.add.task'}
            onClick={this.handleAddTask}
          />
        </h1>
        {this.state.showNewTaskForm &&
          <InputTask close={this.handleClose} />
        }
      </div>
    )
  }
}
