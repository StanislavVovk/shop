const UserOrderModel = require("../../models/UserOrder/UserOrderModel");

class HistoryService {
    async getOrdersByParam(paramName, paramValue) {
        try {
            if (paramName === "_id") return await UserOrderModel.findById(paramValue)
            return await UserOrderModel.find({[paramName]: {$eq: paramValue}})
        } catch (e) {
            throw new Error(e)
        }
    }
}
module.exports = HistoryService
