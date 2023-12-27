export function defineHeightCardBody() {
  const heightBody = window.innerHeight - 391
  console.log()
  const heightContent = heightBody > 382 ? `${heightBody}px` : `382px`
  return { heightCardBody: heightContent }
}