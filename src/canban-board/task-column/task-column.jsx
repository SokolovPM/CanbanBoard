import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { ActionButton, Text, Caption, Col } from 'src/core_modules'
import { Task } from './task'

import style from './style.css'

export const TaskColumn = ({ status, tasks, onDeleteTask, onChangeStatus }) => (
  <Col xs={4}>
    <div className={style.column}>
      <div className={style.columnStatus}><Caption>{status}</Caption></div>
      {_.map(tasks, (task) =>
        <Task
          task={task}
          key={task._id}
          onDeleteTask={onDeleteTask}
          onChangeStatus={onChangeStatus}
        />
      )}
    </div>
  </Col>
)
