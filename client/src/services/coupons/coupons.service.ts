import { ValueOf } from '../../helpers/valueOf';
import { ENV } from '../../common/enums/ENV/env';
import { Http } from '../http/http.service';
import { API_ENUM } from '../../common/enums/Routes/routes';
import { HTTPMethods } from '../../common/enums/HTTP/HTTPMethods';
import { IRequest } from '../cart/cart.service';

export class CouponsService {
  protected apiPath: ValueOf<typeof ENV>
  protected readonly http: Http
  constructor (apiPath: ValueOf<typeof ENV>, http: Http) {
    this.apiPath = apiPath
    this.http = http
  }

  async loadCoupons (query: IRequest | '') {
    return await this.http.load(
      `${this.apiPath}${API_ENUM.COUPONS}`, {
        method: HTTPMethods.GET,
        query
      }
    )
  }
}
