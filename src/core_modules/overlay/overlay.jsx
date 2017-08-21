import React from 'react'

import style from './style.css'

export const Overlay = ({ children }) => (
  <div className={style.overlay}>
    {children}
  </div>
)
