import { ValueOf } from 'helpers/valueOf';
import { Http } from '../http/http.service';
import { ContentType, ENV, API_ENUM, HTTPMethods } from '../../common/common';
import { RequestModel } from 'common/models/common'

export class CartService {
  protected apiPath: ValueOf<typeof ENV>
  protected readonly http: Http
  constructor (apiPath: ValueOf<typeof ENV>, http: Http) {
    this.apiPath = apiPath
    this.http = http
  }

  async loadOrders (query: RequestModel | '' | string) {
    return await this.http.load(
      `${this.apiPath}${API_ENUM.SHOP}`, {
        method: HTTPMethods.GET,
        query
      }
    )
  }

  async sendOrder (payload: object) {
    return await this.http.load(
      `${this.apiPath}${API_ENUM.CART}`, {
        method: HTTPMethods.POST,
        contentType: ContentType.JSON,
        payload: JSON.stringify(payload)

      }
    )
  }
}
