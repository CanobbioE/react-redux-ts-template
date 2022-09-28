import HttpError from '../api/responses/HttpError'
import Http, { ContentType, Response } from './Http'

export interface Parameters {
  token?: string
  data?: any
  contentType?: ContentType
}

export type ModelType<T> = T | T[] | HttpError

type Constructable<T> = new (json: any) => T

const fromGet = async <T>(ModelClass: Constructable<T>, endpoint: string, params?: Parameters): Promise<ModelType<T>> => {
  const response = await Http.get(endpoint, params?.token)
  return _mapToModel(ModelClass, response)
}

const fromPost = async <T>(ModelClass: Constructable<T>, endpoint: string, params?: Parameters): Promise<ModelType<T>> => {
  const response = await Http.post(endpoint, params?.token, params?.data, params?.contentType)
  return _mapToModel(ModelClass, response)
}

function _mapToModel<T> (ModelClass: Constructable<T>, response: Response): ModelType<T> {
  if (response instanceof HttpError) {
    return response
  }

  return _handleResponseType(ModelClass, response.data)
}

function _handleResponseType<T> (ModelClass: Constructable<T>, data: any): T | T[] {
  return Array.isArray(data) ? data.map((json) => new ModelClass(json)) : new ModelClass(data)
}

export default { fromGet, fromPost }
