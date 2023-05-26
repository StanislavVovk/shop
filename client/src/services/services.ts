import { Http } from './http/http.service';
import { ShopService } from './shop/shop.service';
import { ENV } from '../common/common';
import { CouponsService } from './coupons/coupons.service';
import { CartService } from './cart/cart.service';
import { RecaptchaService } from './recaptcha/recaptcha.service';
import { HistoryService } from './history/history.service';

const http = new Http();

const Shop = new ShopService(ENV.API_PATH, http)
const Coupons = new CouponsService(ENV.API_PATH, http)

const Cart = new CartService(ENV.API_PATH, http)
const Recaptcha = new RecaptchaService(ENV.API_PATH, http)
const History = new HistoryService(ENV.API_PATH)

export { Shop, http, Coupons, Cart, Recaptcha, History }
