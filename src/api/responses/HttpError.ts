export default class HttpError {
  status: number
  code: string
  message: string
  raw: any

  constructor (status: number, code: string, message: string, raw: any) {
    this.status = status
    this.code = code
    this.message = message
    this.raw = raw
  }
}
