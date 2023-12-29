import { cardHeightView } from '../constants'

export function defineHeightCardBody(label) {
  const cardOptions = cardHeightView[label]
  const heightBody = window.innerHeight - cardOptions.delta
  const heightContent = heightBody > cardOptions.minHeight ? `${heightBody}px` : `${cardOptions.minHeight}px`
  return { heightCardBody: heightContent }
}

export function defineHeightTable() {
  const height = window.innerHeight - cardHeightView.tickets.delta - 42
  return { heightTable: height }
}