import { errorMessages } from '../constants'

export function errorHandlerAuth(errorObj) {
  let codeError = errorObj?.response?.data?.error?.message
  return codeError && errorMessages[codeError] ? errorMessages[codeError] : errorMessages.DEFAULT_ERROR_MESSAGE
}