const {History} = require('../../services/services')

class HistoryController {
    async getOrders(req, res) {
        try {
            const {paramName, paramValue} = req.query
            if (!paramName || !paramName) {
                res.json('invalid parameter')
            } else {
                const result= await History.getOrdersByParam(paramName, paramValue)
                res.json(result)
            }

        } catch (e) {
            res.statusCode = 500
            res.json(e)
        }

    }
}

module.exports = HistoryController
