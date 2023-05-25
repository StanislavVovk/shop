const CouponsModel = require("../../models/Coupons/CouponsModel");

class CouponsService {
    async createCoupon(data) {
        try {
            return await CouponsModel.create(data)
        } catch (e) {
            throw new Error(e)
        }
    }

    async getCoupons() {
        try {
            return await CouponsModel.find()
        } catch (e) {
            throw new Error(e)
        }
    }

    async deleteCoupon(query) {
        try {
            const {paramName, paramValue} = query
            if (paramName === '_id') return await CouponsModel.findByIdAndDelete(paramValue)
            return await CouponsModel.findOneAndDelete({[paramName]: paramValue})
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = CouponsService
