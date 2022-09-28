import { BaseModel } from 'sjs-base-model'

export default class Login extends BaseModel {
  token = ''
  constructor (data: any) {
    super()
    this.update(data)
  }
}
