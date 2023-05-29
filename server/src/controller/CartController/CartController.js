const {Cart} = require("../../services/services");

class CartController {
    async createOrder(req, res) {
        return await Cart.createOrder(req.body)
            .then(result => res.json(result))
            .catch((e) => {
                res.statusCode = 500
                res.json({
                    message: e, statusCode: res.statusCode
                })
            })
    }

    async getOrderByParam(req, res) {
        const {paramName, paramValue} = req.body

        return await Cart.getOrdersByParam(paramName, paramValue)
            .then(result => res.json(result))
            .catch((e) => {
                res.statusCode = 500
                res.json({
                    message: e, statusCode: res.statusCode
                })
            })
    }
}

module.exports = CartController
