import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import { actions, selectors } from 'src/__data__'

import { ActionButton, Text, Row, Col, Input, TextArea, Common, Overlay } from 'src/core_modules'

import { Button } from './button'
import style from './style.css'

const mapDispatchToProps = (dispatch) => ({
  saveProject: (project) => dispatch(actions.saveProject(project))
})

class InputProjectForm extends Component {
  state = {
    _id: this.props.project._id,
    name: this.props.project.name || '',
    description: this.props.project.description || ''
  }

  handleChangeName = (name) => {
    this.setState({ name })
  }

  handleChangeDescritpion = (description) => {
    this.setState({ description })
  }

  handleSave = () => {
    this.props.saveProject(this.state)
    this.props.close()
  }

  handleCancel = () => {
    this.props.close()
  }

  checkDisabled = () => {

  }

  render () {
    return (
      <Overlay>
        <div className={style.form}>
          <Row className={style.inputRow}>
            <Col xs={4}><Common><Text $={'canban.project.add.name'} /></Common></Col>
            <Col xs={8}>
              <Input
                className={style.input}
                value={this.state.name}
                onChange={this.handleChangeName}
              />
            </Col>
          </Row>
          <Row className={style.inputRow}>
            <Col xs={4}><Common><Text $={'canban.project.add.description'} /></Common></Col>
            <Col xs={8}>
              <TextArea
                className={style.input}
                value={this.state.description}
                onChange={this.handleChangeDescritpion}
              />
            </Col>
          </Row>
          <Button  
            text={'canban.projects.button.cancel'}
            onClick={this.handleCancel}
          />
          <Button
            disabled={!this.state.name}
            text={'canban.projects.button.save'}
            onClick={this.handleSave}
          />
        </div>
      </Overlay>
    )
  }
}

export const InputProject = connect(
  () => ({}),
  mapDispatchToProps
)(InputProjectForm)

InputProjectForm.defaultProps = {
  project: {}
}
