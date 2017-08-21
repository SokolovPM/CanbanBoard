import React from 'react'
import { connect } from 'react-redux'

import { ActionButton, Text, Caption, Row, Col } from 'src/core_modules'
import { selectors, actions } from '../__data__'
import { TaskColumn } from './task-column'
import style from './style.css'

const mapStateToProps = (state) => ({
  todoTasks: selectors.projectBoard.getTasksByStatus(state, 'TO_DO'),
  inProgressTasks: selectors.projectBoard.getTasksByStatus(state, 'IN_PROGRESS'),
  doneTasks: selectors.projectBoard.getTasksByStatus(state, 'DONE')
})

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (task) => dispatch(actions.deleteTask(task)),
  changeStatus: (task, status) => dispatch(actions.changeStatus(task, status))
})

export const Board = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ todoTasks, inProgressTasks, doneTasks, changeStatus, deleteTask }) => (
  <div className={style.board}>
    <div className={style.column}>
      <TaskColumn
        status={'TO DO'}
        tasks={todoTasks}
        onDeleteTask={deleteTask}
        onChangeStatus={changeStatus}
      />
    </div>
    <div className={style.column}>
      <TaskColumn
        status={'IN PROGRESS'}
        tasks={inProgressTasks}
        onDeleteTask={deleteTask}
        onChangeStatus={changeStatus}
      />
    </div>
    <div className={style.column}>
      <TaskColumn
        status={'DONE'}
        tasks={doneTasks}
        onDeleteTask={deleteTask}
        onChangeStatus={changeStatus}
      />
    </div>


  </div>
))
