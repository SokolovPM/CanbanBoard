import React from 'react'
import classnames from 'classnames'

import { Overlay, ActionButton } from '../'
import style from './style.css'

export const Confirm = ({
  text, onChoose, ok = 'OK', cancel = 'CANCEL'
}) => (
  <Overlay>
    <div className={style.form}>
      <div className={style.text}>{text}</div>
      <ActionButton
        className={style.button}
        color={'orange'}
        onClick={() => onChoose(true)}
      >
        {ok}
      </ActionButton>
      <ActionButton
        className={style.button}
        color={'orange'}
        onClick={() => onChoose(false)}
      >
        {cancel}
      </ActionButton>
    </div>
  </Overlay>
)
