import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import { Router, Route, Redirect, browserHistory } from 'react-router'

import { store } from './store'
import { Layout, Projects, CanbanBoard } from './'

import { actions } from './__data__'

import { messages } from './messages'
import { loadMessages } from 'src/core_modules'
loadMessages(messages)

const initProjectList = () => (
  store.dispatch(actions.projectListFetch())
)

ReactDom.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={Layout}>
        <Route
          path='projects'
          component={Projects}
          onEnter={initProjectList()}
        />
        <Route
          path='project/board'
          component={CanbanBoard}
        />
      </Route>
      <Redirect from='/' to='/projects' />
    </Router>
  </Provider>,
  document.getElementById('app')
)
