import { Middleware } from 'redux'
import { ErrorActions } from '../stores/errors/actions'
import { RootState } from '../stores/store'

export const errorsMiddleware: Middleware<{}, RootState> = (storeApi) => (next) => (action) => {
  if (action.isError === true) {
    const errAction = action.payload
    return next(ErrorActions.add(errAction))
  }

  next(ErrorActions.clear())
  next(action)
}
