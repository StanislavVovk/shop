const ShopService = require('./Shop/shop.service')
const CartService = require("./Cart/cart.service")
const CouponsService = require("./Coupons/coupons.service");


const Shop = new ShopService()
const Cart = new CartService()
const Coupons = new CouponsService()

module.exports = {Shop, Cart, Coupons}
