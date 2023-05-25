const {Coupons} = require("../../services/services");

class CouponsController {
    async createCoupon(req, res) {
        try {
            const result = await Coupons.createCoupon(req.body)
            res.json(result)
        } catch (e) {
            res.statusCode = 500
            res.json(e)
        }
    }

    async getCoupons(req, res) {
        try {
            const couponsData = await Coupons.getCoupons()
            res.json(couponsData)
        } catch (e) {
            res.statusCode = 500
            res.json(e)
        }
    }

    async deleteCoupon(req, res) {
        try {
            const result = await Coupons.deleteCoupon(req.body)
            res.json(result)
        } catch (e) {
            res.statusCode = 500
            res.json(e)
        }

    }
}

module.exports = CouponsController
