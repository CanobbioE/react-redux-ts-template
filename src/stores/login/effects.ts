import { ENDPOINTS } from '../../api'
import Login from '../../api/responses/Login'
import Model, { ModelType, Parameters } from '../../utils/Model'

export const loginEffect = async (username: string, password: string): Promise<ModelType<Login>> => {
  const params: Parameters = {
    data: {
      username,
      password
    }
  }

  return await Model.fromPost(Login, ENDPOINTS.login, params)
}
