const {Shop} = require("../../services/services");

class ShopController {

    async createShop(req, res) {
        try {
            const result = await Shop.create(req.body)
            res.json(result)
        } catch (e) {
            res.statusCode = 500
            res.json(e)
        }
    }

    async getShop(req, res) {
        try {
            const shopData = await Shop.getAll(req.body)
            res.json(shopData)
        } catch (e) {
            res.statusCode = 500
            res.json(e)
        }
    }

    async getShopById(req, res) {
        try {
            const {id} = req.body
            const shopData = await Shop.getById(id)
            res.json(shopData)
        } catch (e) {
            res.statusCode = 500
            res.json(e)
        }

    }

    async getShopByParam(req, res) {
        try {
            const { paramName, paramValue} = req.body
            const shopData = await Shop.getByParam(paramName, paramValue)
            res.json(shopData)
        } catch (e) {
            res.statusCode = 500
            res.json(e)
        }

    }

    async modifyByParam(req, res) {
        try {
            const {paramName, paramValue, items} = req.body
            const result = await Shop.modifyByParam(paramName, paramValue, items)
            res.json(result)

        } catch (e) {
            res.statusCode = 500
            res.json(e)
        }
    }

    async modifyById(req, res) {
        try {
            const {id} = req.body
            const result = await Shop.modifyById(id)
            res.json(result)
        } catch (e) {
            res.statusCode = 500
            res.json(e)
        }
    }

    async deleteShop(req, res) {
        try {
            const {paramName, paramValue} = req.body
            const result = await Shop.delete(paramName, paramValue)
            res.json(result)
        } catch (e) {
            res.statusCode = 500
            res.json(e)
        }
    }
}

module.exports = ShopController
