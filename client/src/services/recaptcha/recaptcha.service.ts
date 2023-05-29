import { API_ENUM, ENV } from 'common/common';
import { ValueOf } from 'helpers/valueOf';
import { Http } from '../http/http.service';
import { RecaptchaAnswerModel } from 'common/models/common';
import axios, { AxiosResponse } from 'axios';

export class RecaptchaService {
  protected apiPath: ValueOf<typeof ENV>
  protected readonly http: Http

  constructor (apiPath: ValueOf<typeof ENV>, http: Http) {
    this.apiPath = apiPath
    this.http = http
  }

  verifyToken = async (tokenData: string) => {
    return await axios.post<RecaptchaAnswerModel>(`${this.apiPath}${API_ENUM.RECAPTCHA}`, {
      token: tokenData
    }).then((response: AxiosResponse<RecaptchaAnswerModel>) => response.data)
      .catch(e => {
        throw new Error(e)
      })
  }
}
