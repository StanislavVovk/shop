const ShopController = require("./ShopController/ShopController");
const CartController = require("./CartController/CartController");
const CouponsController = require("./CouponsController/CouponsController");


const shopController = new ShopController()
const cartController = new CartController()
const couponsController = new CouponsController()

module.exports = {
    shopController,
    cartController,
    couponsController
}
