import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions, selectors } from 'src/__data__'

import classnames from 'classnames'
import { Input, TextArea, ActionButton, Text, Select,
  Option, Row, Col, Common, Overlay } from 'src/core_modules'
import { Button } from './button'
import style from './style.css'

const mapStateToProps = (state) => ({
  author: state.login,
  users: state.users
})
const mapDispatchToProps = (dispatch) => ({
  saveTask: (task) => dispatch(actions.saveTask(task))
})

class InputTaskForm extends Component {
  state = {
    title: this.props.task.title || '',
    description: this.props.task.description || '',
    status: this.props.task.status || 'TO_DO',
    _id: this.props.task._id,
    author: this.props.task.author || this.props.author,
    user: this.props.task.user || '',
    subtasks: this.props.task.subtasks,
    deg: this.props.task.rotate || Math.floor(Math.random() * 10) - 5 
  }

  onChangeTitle = (title) => {
    this.setState({ title })
  }

  onChangeDescription = (description) => {
    this.setState({ description })
  }

  handleSave = () => {
    this.props.saveTask(this.state)
    this.props.close()
  }

  handleUserChange = (user) => {
    this.setState({ user })
  }

  renderRow = (text, data) => (
    <Row className={style.inputRow}>
      <Col xs={4}>
        <Common><Text $={text} /></Common>
      </Col>
      <Col xs={8}>{data}</Col>
    </Row>
  )

  render() {
    const { users } = this.props
    return (
      <Overlay>
        <div className={style.form}>
          {this.renderRow('canban.task.new.input.name',
            <Input
              className={style.input}
              onChange={this.onChangeTitle}
              value={this.state.title}
            />
          )}
          {this.renderRow('canban.task.new.input.description',
            <TextArea
              className={style.input}
              onChange={this.onChangeDescription}
              value={this.state.description}
            />
          )}
          {this.renderRow('canban.task.new.input.executor',
            <Select
              className={style.input}
              selected={this.state.user}
              onChange={this.handleUserChange}
              placeholder={'Choose executor'}
            >
              {users && _.map(users, (user) => (
                <Option
                  className={style.input}
                  value={user.login}
                  title={user.login}
                  key={user.login}
                />
              ))}
            </Select>
          )}
          <Button
            text={'canban.task.save.button.cancel'}
            onClick={this.props.close}
          />
          <Button
            disabled={!this.state.title}
            text={'canban.task.save.button.save'}
            onClick={this.handleSave}
          />
        </div>
      </Overlay>
    )
  }
}

export const InputTask = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputTaskForm)

InputTaskForm.defaultProps = {
  task: {}
}
