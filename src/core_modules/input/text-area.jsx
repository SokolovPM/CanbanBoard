import React from 'react'
import classnames from 'classnames'

import style from './style.css'

export const TextArea = ({ value, onChange, rows = 5, className }) => (
  <textarea
    rows={rows}
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className={classnames(className, style.textArea)}
  />
)
