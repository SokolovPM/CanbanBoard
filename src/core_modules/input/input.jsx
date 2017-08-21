import React from 'react'
import classnames from 'classnames'

import style from './style.css'

export const Input = ({ value, onChange, className }) => (
  <input
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className={classnames(className, style.input)}
  />
)
