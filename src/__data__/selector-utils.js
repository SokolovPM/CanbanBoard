import { createSelector } from 'reselect'

export const flagSelector = (selector, name) => createSelector(
  selector,
  (map) => map.get(name)
)
