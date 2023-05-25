const {Cart} = require("../../services/services");

class CartController {
    async createOrder(req, res) {
        try {
            const result = await Cart.createOrder(req.body)
            res.json(result)
        } catch (e) {
            res.statusCode = 500
            res.json(e)
        }
    }

    async getOrderByParam(req, res) {
        try {
            const {paramName, paramValue} = req.body
            const result = await Cart.getOrdersByParam(paramName, paramValue)
            res.json(result)
        } catch (e) {
            res.statusCode = 500
            res.json(e)
        }
    }
}

module.exports = CartController
