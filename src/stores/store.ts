import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { errorsMiddleware } from '../middlewares/errors'
import { loggerMiddleware } from '../middlewares/logger'
import { ErrorsReducer } from './errors/reducer'
import { LanguageReducer } from './language/reducer'
import { LoadingReducer } from './loading/reducer'
import { LoginReducer } from './login/reducer'

export const rootReducer = combineReducers({
  login: LoginReducer,
  errors: ErrorsReducer,
  loading: LoadingReducer,
  i18n: LanguageReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (gdm) => gdm().prepend(errorsMiddleware).prepend(loggerMiddleware)
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
