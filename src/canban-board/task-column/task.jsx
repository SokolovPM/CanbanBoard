import React, { Component } from 'react'
import _ from 'lodash'
import classnames from 'classnames'

import { Caption, Common, Confirm } from 'src/core_modules'
import { InputTask } from '../input-task'
import { StatusLink} from './status-link'
import style from './style.css'
import { MainTask } from './main-task'
import { SubTask } from './subtask'

export class Task extends Component {
  state = {
    showConfirmForm: false,
    showChangeForm: false
  }

  handleDelete = () => {
    this.setState({ showConfirmForm: true })
  }

  handleDeleteChoose = (answer) => {
    this.setState({ showConfirmForm: false })
    if (answer) {
      this.props.onDeleteTask(this.props.task)
    }
  }

  handleChange = () => {
    this.setState({ showChangeForm: true })
  }

  handleCloseInputForm = () => {
    this.setState({ showChangeForm: false })
  }

  render () {
    const { task, showTask, deleteTask, onChangeStatus, changeSubtaskStatus } = this.props
    return (
      <div className={style.taskContainer}>
        <MainTask
          task={task}
          onDelete={this.handleDelete}
          onChange={this.handleChange}
          onChangeStatus={onChangeStatus}
        />
        {task.subtasks && _.map(task.subtasks,
          (subtask) => <SubTask key={subtask.description} subtask={subtask} task={task} />)
        }
        {this.state.showConfirmForm &&
          <Confirm onChoose={this.handleDeleteChoose} text={'Delete task?'} />
        }
        {this.state.showChangeForm &&
          <InputTask task={task} close={this.handleCloseInputForm} />
        }
      </div>
    )
  }
}
