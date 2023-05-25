const {API_ENUM} = require("../common/common.js");
const {shopController, cartController, couponsController} = require("../controller/controllers");

const mainRouter = require('express').Router()

mainRouter.route(API_ENUM.SHOP)
    .post(shopController.createShop)
    .get(shopController.getShop)
    .put(shopController.modifyByParam)
    .delete(shopController.deleteShop)

mainRouter.route(API_ENUM.CART)
    .post(cartController.createOrder)
    .get(cartController.getOrderByParam)

mainRouter.route(API_ENUM.HISTORY)
    .get(cartController.getOrderByParam)

mainRouter.route(API_ENUM.COUPONS)
    .get(couponsController.getCoupons)
    .post(couponsController.createCoupon)
    .delete(couponsController.deleteCoupon)


module.exports = mainRouter
