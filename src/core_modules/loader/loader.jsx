import React from 'react'

import { Icon, Overlay } from 'src/core_modules'

import style from './style.css'

export const Loader = () => (
  <Overlay>
    <div className={style.loader}>
      <Icon name={'spin'} />
    </div>
  </Overlay>
)
