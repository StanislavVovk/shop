import { Http } from '../http/http.service';
import { API_ENUM, ENV, HTTPMethods } from 'common/common'
import { ValueOf } from 'helpers/valueOf';

export class ShopService {
  protected apiPath: ValueOf<typeof ENV>
  protected readonly http: Http

  constructor (apiPath: ValueOf<typeof ENV>, http: Http) {
    this.apiPath = apiPath
    this.http = http
  }

  async load () {
    return await this.http.load(
      `${this.apiPath}${API_ENUM.SHOP}`, {
        method: HTTPMethods.GET
      }
    )
  }
}
