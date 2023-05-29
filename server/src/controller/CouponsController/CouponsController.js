const {Coupons} = require("../../services/services");

class CouponsController {
    async createCoupon(req, res) {

        return await Coupons.createCoupon(req.body).
        then(result => res.json(result))
            .catch((e) => {
                res.statusCode = 500
                res.json({
                    message: e, statusCode: res.statusCode
                })
            })
    }

    async getCoupons(req, res) {

        return await Coupons.getCoupons(req.body)
            .then(result => res.json(result))
            .catch((e) => {
                res.statusCode = 500
                res.json({
                    message: e, statusCode: res.statusCode
                })
            })
    }

    async deleteCoupon(req, res) {
        return await Coupons.deleteCoupon(req.body)
            .then(result => res.json(result))
            .catch((e) => {
                res.statusCode = 500
                res.json({
                    message: e, statusCode: res.statusCode
                })
            })
    }
}

module.exports = CouponsController
