import React from 'react'
import _ from 'lodash'

const messages = {}

export const loadMessages = (source) => _.extend(messages, source)

export const Text = ({ $, __, onClick, className }) => (
  <span
    onClick={onClick}
    dangerouslySetInnerHTML={generateString($, __)}
    className={className}
  />
)

const generateString = (key, pieces) => {
  const text = messages[key]
  return pieces ?
    text.replace(/\{(\d+)\}/g, (a, found) =>
      { __html: pieces[found] }
    ) :
    { __html: text }
}
