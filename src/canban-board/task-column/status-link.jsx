import React from 'react'
import classnames from 'classnames'

import { Row, Col, Text } from 'src/core_modules'

import style from './style.css'

const next = (task, changeStatus) => {
  switch (task.status) {
  case 'TO_DO':
    return (
      <div
        onClick={() => changeStatus(task, 'IN_PROGRESS')}
        className={classnames('pull-right', style.statusLink)}
      >
        <Text $={'canban.board.task.link.in.progress'} />
      </div>
    )
  case 'IN_PROGRESS':
    return (
      <div
        onClick={() => changeStatus(task,  'DONE')}
        className={classnames('pull-right', style.statusLink)}
      >
        <Text $={'canban.board.task.link.done'} />
      </div>
    )
  default:
    return null
  }
}

const prev = (task, changeStatus) => {
  switch (task.status) {
  case 'IN_PROGRESS':
    return (
      <div
        className={style.statusLink}
        onClick={() => changeStatus(task, 'TO_DO')}
      >
        <Text $={'canban.board.task.link.back.in.list'} />
      </div>
    )
  case 'DONE':
    return (
      <div
        className={style.statusLink}
        onClick={() => changeStatus(task, 'IN_PROGRESS')}
      >
        <Text $={'canban.board.task.link.back.in.progress'} />
      </div>
    )
  default:
    return null
  }
}

export const StatusLink = ({ task, changeStatus }) => (
  <div className={style.statusRow}>
    <Row>
      <Col xs={6}>
        {prev(task, changeStatus)}
      </Col>
      <Col xs={6}>
        {next(task, changeStatus)}
      </Col>
    </Row>
  </div>
)
