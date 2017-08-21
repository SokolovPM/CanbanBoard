import React, { Component } from 'react'
import classnames  from 'classnames'
import { Row, Col, Title, Common, Text, Confirm, Icon } from 'src/core_modules'

import { InputProject } from '../input-project'
import style from './style.css'

export class Project extends Component {
  state = {
    showChangeForm: false,
    showConfirmForm: false
  }

  handleSelect = () => {
    this.props.onSelectProject(this.props.project._id)
  }

  handleDelete = () => {
    this.setState({ showConfirmForm: true })
  }

  handleDeleteChoose = (answer) => {
    this.setState({ showConfirmForm: false })
    if (answer) {
      this.props.onDeleteProject(this.props.project._id)
    }
  }

  handleChange = () => {
    this.setState({ showChangeForm: true })
  }

  handleCloseInputForm = () => {
    this.setState({ showChangeForm: false })
  }

  render () {
    const { project, onSelectProject, onDeleteProject, onChangeProject } = this.props
    return (
      <Col xs={6}>
        <div>
          <div className={style.folder}>
            <Row>
              <Col xs={8}>
                <div onClick={this.handleSelect} className={style.projectTitle}>
                  <Title>{project.name}</Title>
                </div>
              </Col>
              <Col xs={4} className={style.projectControlBlock}>
                  <div
                    className={style.projectControl}
                    onClick={this.handleDelete}
                  >
                    <Icon name={'trash'} />
                  </div>
                  <div
                    className={style.projectControl}
                    onClick={this.handleChange}
                  >
                    <Icon name={'edit'} />
                  </div>
              </Col>
            </Row>
            <div className={style.projectDescription}>
              <Common>{project.description}</Common>
            </div>
          </div>
        </div>
        {this.state.showChangeForm &&
          <InputProject project={project} close={this.handleCloseInputForm} />
        }
        {this.state.showConfirmForm &&
          <Confirm onChoose={this.handleDeleteChoose} text={'Delete project?'} />
        }
      </Col>
    )
  }
}
