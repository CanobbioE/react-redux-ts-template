import { RootState } from '../store'

const selectError = (state: RootState) => state.errors.error

export const ErrorSelectors = { selectError }
