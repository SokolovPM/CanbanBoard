import React, { Component } from 'react'
import _ from 'lodash'
import classnames from 'classnames'

import style from './style.css'

import { Option } from './option'

export class Select extends Component {

  handleChange = (e) => {
    this.props.onChange(e.target.value)
  }

  render () {
    const { children, selected, placeholder, className } = this.props
    return (
      <select
        className={classnames(style.select, className)}
        onChange={this.handleChange}
        value={selected || ''}
      >
        {!selected && <Option value={''} title={placeholder} />}
        {_.isArray(children) ?
          _.map(children, (child, i) =>
            child
          )
          :
          {children}
        }
      </select>
    )
  }
}
