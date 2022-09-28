import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios'
import { BASE_URL } from '../api'
import HttpError from '../api/responses/HttpError'

interface Error {
  code?: string
  message?: string
  status?: number
  raw?: any
}

export type Response = AxiosResponse<any, any> | HttpError

enum RequestMethod {
  GET = 'get',
  POST = 'post',
  PATCH = 'patch',
  PUT = 'put',
  DELETE = 'delete',
}

enum RequestHeaders {
  ContentType = 'Content-Type',
  Authorization = 'Authorization',
}

export enum ContentType {
  ApplicationJSON = 'application/json',
  MultipartFormData = 'multipart/form-data',
}

async function _request (
  method: RequestMethod,
  endpoint: string,
  headers: AxiosRequestHeaders,
  data?: any
): Promise<Response> {
  const url = `${BASE_URL}${endpoint}`

  const cfg: AxiosRequestConfig = {
    headers,
    url,
    method,
    data
  }

  try {
    const response = await axios(cfg)

    const { status, statusText, data } = response

    if (data.success === false) {
      return _handleError({ status, message: statusText, raw: data })
    }

    return { ...response }
  } catch (e: any) {
    if (e.response !== null || e.response !== undefined) {
      const { code, status, message } = e.response.data
      return _handleError({ code, message, status, raw: e.response.data })
    }

    if (e.request !== null || e.request !== undefined) {
      const { status, statusText, data } = e.request
      const err: Error = { code: status, message: statusText, raw: data }
      return _handleError(err)
    }

    console.log(e)
    const err: Error = { raw: e }
    return _handleError(err)
  }
}

function _handleError (error: Error): HttpError {
  return new HttpError(error.status ?? 500, error.code ?? 'unknown', error.message ?? 'message', error.raw)
}

function _setHeaders (contentType?: ContentType, authToken?: string): AxiosRequestHeaders {
  const headers: AxiosRequestHeaders = {}
  if (contentType !== null && contentType !== undefined) {
    headers[`${RequestHeaders.ContentType}`] = contentType
  }
  if (authToken !== null && authToken !== undefined) {
    headers[`${RequestHeaders.Authorization}`] = authToken
  }

  return headers
}

const get = async (endpoint: string, authToken?: string): Promise<Response> => {
  return await _request(RequestMethod.GET, endpoint, _setHeaders(undefined, authToken))
}
const post = async (endpoint: string, data: any, authToken?: string, contentType?: ContentType): Promise<Response> => {
  return await _request(RequestMethod.POST, endpoint, _setHeaders(contentType, authToken), data)
}
const patch = async (endpoint: string, data: any, authToken?: string, contentType?: ContentType): Promise<Response> => {
  return await _request(RequestMethod.PATCH, endpoint, _setHeaders(contentType, authToken), data)
}
const put = async (endpoint: string, data: any, authToken?: string, contentType?: ContentType): Promise<Response> => {
  return await _request(RequestMethod.PUT, endpoint, _setHeaders(contentType, authToken), data)
}
const del = async (endpoint: string, data: any, authToken?: string, contentType?: ContentType): Promise<Response> => {
  return await _request(RequestMethod.DELETE, endpoint, _setHeaders(contentType, authToken), data)
}

export default { get, post, patch, put, del }
