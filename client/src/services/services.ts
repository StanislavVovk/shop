import { Http } from './http/http.service';
import { ShopService } from './shop/shop.service';
import { ENV } from '../common/common';

const http = new Http();

const Shop = new ShopService(ENV.API_PATH, http)

export { Shop, http }
