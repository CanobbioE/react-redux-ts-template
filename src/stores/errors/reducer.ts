import HttpError from '../../api/responses/HttpError'
import { DefaultAction } from '../Action'
import { ERRORS_ADD, ERRORS_CLEAR } from './actions'

interface ErrorState {
  error: HttpError | null
}

const INITIAL_STATE: ErrorState = {
  error: null
}

export const ErrorsReducer = (state = INITIAL_STATE, action: DefaultAction<HttpError>): ErrorState => {
  if (action.isError) {
    return { ...state, error: action.payload }
  }

  switch (action.type) {
    case ERRORS_ADD:
      return { ...state, error: action.payload }
    case ERRORS_CLEAR:
      return { ...state, error: null }
  }

  return { ...INITIAL_STATE, ...state }
}
