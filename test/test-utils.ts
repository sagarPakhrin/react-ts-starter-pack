/* eslint-disable import/export */
import { render as rtlRender } from '@testing-library/react'

const render = (ui, options) => {
  // TODO setup wrapper with default render function
  return rtlRender(ui, { ...options })
}

export * from '@testing-library/react'
export { render }
