import { ValueOf } from 'helpers/valueOf';
import { ENV, API_ENUM, HTTPMethods } from 'common/common';
import { Http } from '../http/http.service';
import { RequestModel } from 'common/models/common';

export class CouponsService {
  protected apiPath: ValueOf<typeof ENV>
  protected readonly http: Http
  constructor (apiPath: ValueOf<typeof ENV>, http: Http) {
    this.apiPath = apiPath
    this.http = http
  }

  async loadCoupons (query: RequestModel | string) {
    return await this.http.load(
      `${this.apiPath}${API_ENUM.COUPONS}`, {
        method: HTTPMethods.GET,
        query
      }
    )
  }
}
