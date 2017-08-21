import React, { Component } from 'react'
import classnames from 'classnames'
import { Caption, Common, Row, Col } from 'src/core_modules'
import { StatusLink } from './status-link'
import { InputSubTask } from '../input-subtask'
import style from './style.css'

export class MainTask extends Component {
  state = {
    showAddSubTask: false
  }

  handleShowAddSubTask = () => {
    this.setState({ showAddSubTask: true })
  }

  handleCloseAddSubTask = () => {
    this.setState({ showAddSubTask: false })
  }

  render () {
    const { task, onDelete, onChange, onChangeStatus } = this.props
    return (
      <div>
        <div className={classnames(style.task,
          style[`task-${task.status.toLowerCase().trim().replace('_', '')}`])}
          style={{ 'transform': `rotate(${task.deg}deg)` }}
        >
          <Row>
            <Col xs={10}>
              <div onClick={onChange} className={style.taskHeader}>
                <Caption>{task.title}</Caption>
              </div>
            </Col>
            <Col xs={2}>
              <div onClick={onDelete} className={style.taskHeader}>
                <Caption>{'X'}</Caption>
              </div>
            </Col>
          </Row>
          <div className={style.taskDescription}>
            <Common>{task.description}</Common>
          </div>
          <div className={style.taskUser}>{task.user}</div>
          <div className={style.taskSubtask} onClick={this.handleShowAddSubTask}>
            <Caption>{'+ subtask'}</Caption>
          </div>
          <StatusLink task={task} changeStatus={onChangeStatus} />
        </div>
        {this.state.showAddSubTask &&
          <InputSubTask task={task} close={this.handleCloseAddSubTask} />
        }
      </div>
    )
  }
}
