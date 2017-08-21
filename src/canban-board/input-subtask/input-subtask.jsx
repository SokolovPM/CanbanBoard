import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import { actions, selectors } from 'src/__data__'
import { Overlay, TextArea, ActionButton, Text, Row, Col, Common } from 'src/core_modules'
import style from './style.css'

const mapDispatchToProps = (dispatch) => ({
  saveTask: (task) => dispatch(actions.saveTask(task))
})

class InputSubTaskForm extends Component {
  state = {
    description: '',
    status: 'TO_DO',
    deg: Math.floor(Math.random() * 4) - 2 
  }

  handleChangeDescription = (description) => {
    this.setState({ description })
  }

  handleSave = () => {
    const { task } = this.props
    if (task.subtasks) {
      task.subtasks.push(this.state)
    } else {
      task.subtasks = [this.state]
    }
    this.props.saveTask(task)
    this.props.close()
  }

  handleCancel = () => {
    this.props.cancelSubtask()
  }

  render () {
    return (
      <Overlay>
        <div className={style.form}>
          <Row className={style.inputRow}>
            <Col xs={12}>
              <TextArea
                className={style.input}
                value={this.state.description}
                onChange={this.handleChangeDescription}
              />
            </Col>
          </Row>
          <ActionButton
            className={classnames('pull-right', style.button)}
            color={'orange'}
            onClick={this.props.close}
            >
            <Text $={'canban.task.button.add.subtask.cancel'} />
          </ActionButton>
          <ActionButton
            className={classnames('pull-right', style.button)}
            color={'orange'}
            disabled={!this.state.description}
            onClick={this.handleSave}
          >
            <Text $={'canban.task.button.add.subtask.save'} />
          </ActionButton>
        </div>
      </Overlay>
    )
  }
}

export const InputSubTask = connect(
  () => ({}),
  mapDispatchToProps
)(InputSubTaskForm)
