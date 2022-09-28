import Action from '../Action'
import { AppDispatch } from '../store'
import { loginEffect } from './effects'

export const LOGIN = 'login'
export const LOGIN_COMPLETE = `${LOGIN}${Action.COMPLETE_SUFFIX}`
export const LOGIN_LOADING = `${LOGIN}${Action.LOADING_SUFFIX}`
const login = (username: string, password: string) => async (dispatch: AppDispatch) => {
  await Action.createThunk(dispatch, LOGIN, loginEffect, username, password)
}

export const LOGOUT = 'logout'
const logout = () => Action.createDefault(LOGOUT)

export const LoginActions = { login, logout }
