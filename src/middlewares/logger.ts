import { Middleware } from 'redux'
import { RootState } from '../stores/store'

export const loggerMiddleware: Middleware<{}, RootState> = (storeApi) => (next) => (action) => {
  const state = storeApi.getState()

  console.log('state is: ', state)

  next(action)
}
