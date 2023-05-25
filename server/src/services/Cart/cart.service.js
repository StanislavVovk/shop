const UserOrderModel = require("../../models/UserOrder/UserOrderModel");

class CartService {
    async createOrder(orderData) {
        try {
            return await UserOrderModel.create(orderData)
        } catch (e) {
            throw new Error(e)
        }
    }

    async getOrdersByParam(paramName, paramValue) {
        try {
            if (paramName === "_id") return await UserOrderModel.findById(paramValue)
            return await UserOrderModel.find({[paramName]: paramValue})
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = CartService
