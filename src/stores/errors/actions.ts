import HttpError from '../../api/responses/HttpError'
import Action from '../Action'

export const ERRORS_CLEAR = 'errors.clear'
const clear = () => Action.createDefault(ERRORS_CLEAR)

export const ERRORS_ADD = 'errors.add'
const add = (error: HttpError) => Action.createDefault(ERRORS_ADD, error, true)

export const ErrorActions = { add, clear }
