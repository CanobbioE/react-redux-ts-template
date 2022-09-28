import { RootState } from '../store'

const selectToken = (state: RootState) => state.login.token

const selectIsAuthenticated = (state: RootState) => state.login.authenticated

export const LoginSelectors = { selectToken, selectIsAuthenticated }
