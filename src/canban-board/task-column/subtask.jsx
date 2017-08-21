import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import { actions } from 'src/__data__'
import { Common, Confirm, Row, Col } from 'src/core_modules'
import { StatusLink } from './status-link'
import style from './style.css'

const mapDispatchToProps = (dispatch) => ({
  saveTask: (task) => dispatch(actions.saveTask(task))
})

class SubTaskForm extends Component {
  state = {
    showConfirmForm: false
  }

  handleDelete = () => {
    this.setState({ showConfirmForm: true })
  }

  handleDeleteChoose = (answer) => {
    this.setState({ showConfirmForm: false })
    if (answer) {
      const { subtask, task} = this.props
      _.remove(task.subtasks, (value) => value.description === subtask.description)
      this.props.saveTask(task)
    }
  }

  handleChangeStatus = (subtask, status) => {
    const task = this.props.task
    _.find(task.subtasks,
      (value) => value.description === subtask.description
    ).status = status
    this.props.saveTask(task)
  }

  render () {
    const { subtask, task } = this.props
    return (
      <div>
        <div key={subtask.description}
          className={classnames(style.subtask,
            style[`subtask-${subtask.status.toLowerCase().trim().replace('_', '')}`])}
          style={{ 'transform': `rotate(${subtask.deg}deg)`}}
        >
          <Row className={style.subtaskDescription}>
            <Col xs={10}>
              <div className={style.description}>{subtask.description}</div>
            </Col>
            <Col xs={2}>
              <div className={style.subtaskDelete} onClick={this.handleDelete}>
                <Common>{'X'}</Common>
              </div>
            </Col>
          </Row>
          <StatusLink task={subtask} changeStatus={this.handleChangeStatus} />
        </div>
        {this.state.showConfirmForm &&
          <Confirm onChoose={this.handleDeleteChoose} text={'delete subtask?'} />
        }
      </div>
    )
  }
}

export const SubTask = connect(
  () => ({}),
  mapDispatchToProps
)(SubTaskForm)
