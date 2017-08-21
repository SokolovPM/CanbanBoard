import React from 'react'

import { icons } from '../../icons'
import style from './style.css'

export const Icon = ({ name }) => (
    <span dangerouslySetInnerHTML={{ __html: icons[name] }} />
)
