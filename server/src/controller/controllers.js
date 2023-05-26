const ShopController = require("./ShopController/ShopController");
const CartController = require("./CartController/CartController");
const CouponsController = require("./CouponsController/CouponsController");
const RecaptchaController = require("./RecaptchaController/RecaptchaController");
const HistoryController = require("./HistoryController/HistoryController")

const shopController = new ShopController()
const cartController = new CartController()
const couponsController = new CouponsController()
const recaptchaController = new RecaptchaController()
const historyController = new HistoryController()

module.exports = {
    shopController,
    cartController,
    couponsController,
    recaptchaController,
    historyController
}
