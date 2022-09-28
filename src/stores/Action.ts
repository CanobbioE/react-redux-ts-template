import HttpError from '../api/responses/HttpError'
import { ModelType } from '../utils/Model'
import { AppDispatch } from './store'

const COMPLETE_SUFFIX = '_COMPLETE'
const LOADING_SUFFIX = '_LOADING'

export interface DefaultAction<T> {
  type: string
  payload: T | null
  isError: boolean
  meta: any
}

type EffectFunction<T> = (...a: any) => Promise<ModelType<T>>

const createDefault = <T>(
  type: string,
  payload: T | null = null,
  isError: boolean = false,
  meta: any = null
): DefaultAction<T> => ({ type, payload, isError, meta })

const createThunk = async <T>(
  dispatch: AppDispatch,
  type: string,
  effect: EffectFunction<T>,
  ...args: any
): Promise<ModelType<T>> => {
  dispatch(createDefault(`${type}${LOADING_SUFFIX}`))

  const model = await effect(...args)
  const isError = model instanceof HttpError

  dispatch(createDefault(`${type}${COMPLETE_SUFFIX}`, model, isError))

  return model
}

export default { COMPLETE_SUFFIX, LOADING_SUFFIX, createDefault, createThunk }
