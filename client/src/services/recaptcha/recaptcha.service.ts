import { API_ENUM, ENV } from '../../common/common';
import { ValueOf } from '../../helpers/valueOf';
import { Http } from '../http/http.service';
import axios from 'axios';

export class RecaptchaService {
  protected apiPath: ValueOf<typeof ENV>
  protected readonly http: Http

  constructor (apiPath: ValueOf<typeof ENV>, http: Http) {
    this.apiPath = apiPath
    this.http = http
  }

  verifyToken = async (token: string) => {
    return await axios.post(`${this.apiPath}${API_ENUM.RECAPTCHA}`, {
      token
    }).then((data) => data)
      .catch(e => {
        throw new Error(e)
      })
  }
}
