import Login from '../../api/responses/Login'
import { DefaultAction } from '../Action'
import { LOGIN_COMPLETE, LOGOUT } from './actions'

interface LoginState {
  authenticated: boolean
  token: string | null
}

const LOCAL_STORAGE_TOKEN_KEY = 'token'

const INITIAL_STATE: LoginState = {
  authenticated: Boolean(
    localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) !== '' && localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
  ),
  token: localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
}

export const LoginReducer = (state = INITIAL_STATE, action: DefaultAction<Login>): LoginState => {
  const token = action.payload != null ? action.payload.token : null

  switch (action.type) {
    case LOGIN_COMPLETE:
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token ?? '')
      return { ...state, authenticated: Boolean(token), token }

    case LOGOUT:
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, '')
      return { ...state, authenticated: false, token: '' }
  }

  return { ...INITIAL_STATE, ...state }
}
