import React, { Component } from 'react'
import classnames from 'classnames'
import style from './style.css'

export class ActionButton extends Component {

  getStyle = () => {
    const { className, size, color, disabled } = this.props
    return classnames(
      className,
      style.actionButton,
      style[`action-button-${size}`],
      disabled ? style[`${color}-disabled`] : style[`${color}`]
    )
  }

  handleClick = () => {
    if (!this.props.disabled) {
      this.props.onClick()
    }
  }

  render () {
    const { children } = this.props
    return (
      <div
        onClick={this.handleClick}
        className={this.getStyle()}
      >
        {children}
      </div>
    )
  }
}

ActionButton.defaultProps = {
  color: 'grey',
  size: 'm',
  disabled: false
}
