import { ValueOf } from '../../helpers/valueOf';
import { ENV } from '../../common/enums/ENV/env';
import { Http } from '../http/http.service';
import { API_ENUM } from '../../common/enums/Routes/routes';
import { HTTPMethods } from '../../common/enums/HTTP/HTTPMethods';
import { ContentType } from '../../common/common';

export interface IRequest {
  paramName: string
  paramValue: string
}
export class CartService {
  protected apiPath: ValueOf<typeof ENV>
  protected readonly http: Http
  constructor (apiPath: ValueOf<typeof ENV>, http: Http) {
    this.apiPath = apiPath
    this.http = http
  }

  async loadOrders (query: IRequest | '' | string) {
    return await this.http.load(
      `${this.apiPath}${API_ENUM.SHOP}`, {
        method: HTTPMethods.GET,
        query
      }
    )
  }

  async sendOrder (payload: any) {
    return await this.http.load(
      `${this.apiPath}${API_ENUM.CART}`, {
        method: HTTPMethods.POST,
        contentType: ContentType.JSON,
        payload: JSON.stringify(payload)

      }
    )
  }
}
