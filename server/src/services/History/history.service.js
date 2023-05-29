const UserOrderModel = require("../../models/UserOrder/UserOrderModel");

class HistoryService {
    async getOrdersByParam(paramName, paramValue) {
        if (paramName === "_id") return await UserOrderModel.findById(paramValue)
            // an implicit mechanic to bring it all to the same type
            // findById should return 1 item coz id unique
            // that's mean that I can wrap data into []
            // fixme
            .then(data => [data])
            .catch(error => {
                throw new Error(error)
            })
        return await UserOrderModel.find({[paramName]: {$eq: paramValue}})
            // think here about saving username in lowercase to more quality search
            // todo
            .then(data => {
                return data
            })
            .catch(error => {
                throw new Error(error)
            })
    }
}

module.exports = HistoryService
