const {History} = require('../../services/services')

class HistoryController {
    async getOrders(req, res) {
        const {paramName, paramValue} = req.query
        if (!paramName || !paramName) {
            res.statusCode = 500
            res.json({
                message: 'Invalid parameter',
                statusCode: res.statusCode
            })
            // todo create error model!!!
        } else {
            await History.getOrdersByParam(paramName, paramValue).then(result => res.json(result))
                .catch((e) => {
                        res.statusCode = 500
                        res.json({
                            message: e,
                            statusCode: res.statusCode
                        })
                    }
                )

        }

    }
}

module.exports = HistoryController
