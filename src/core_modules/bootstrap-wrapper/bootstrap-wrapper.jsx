import React from 'react'

export const Row = ({ children, className = '' }) => (
  <div className={`row ${className}`}>
    {children}
  </div>
)

export const Col = ({ xs, children, className = '' }) => (
  <div className={`col-xs-${xs} ${className}`}>
    {children}
  </div>
)
