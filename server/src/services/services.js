const ShopService = require('./Shop/shop.service')
const CartService = require("./Cart/cart.service")
const CouponsService = require("./Coupons/coupons.service");
const RecaptchaService = require("./Recaptcha/recaptcha.service");
const HistoryService = require("./History/history.service");


const Shop = new ShopService()
const Cart = new CartService()
const Coupons = new CouponsService()
const Recaptcha = new RecaptchaService()
const History = new HistoryService()

module.exports = {Shop, Cart, Coupons, Recaptcha, History}
