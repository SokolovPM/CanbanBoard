import React from 'react'
import classnames from 'classnames'

import { Text, ActionButton } from 'src/core_modules'
import style from './style.css'

export const Button = ({ text, onClick, disabled = false }) => (
  <ActionButton
    className={classnames('pull-right', style.button)}
    onClick={onClick}
    color={'orange'}
    disabled={disabled}
  >
    <Text $={text} />
  </ActionButton>
)
