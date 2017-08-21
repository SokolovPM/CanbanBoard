import React from 'react'
import { connect } from 'react-redux'

import { Loader } from 'src/core_modules'

import style from './style.css'

const mapStateToProps = (state) => ({
  isLoading: state.loader
})

export const LayoutForm = ({ children, isLoading }) => (
  <div>
    {isLoading ? <Loader /> : ''}
    <div className={'container-fluid'}>
      <div className={style.content}>
        {children}
      </div>
    </div>
  </div>
)

export const Layout = connect(
  mapStateToProps
)(LayoutForm)
