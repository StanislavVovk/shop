const ShopModel = require("../../models/Shop/ShopModel");


class ShopService {
    async create(data) {
        try {
            return await ShopModel.create(data)
        } catch (e) {
            throw new Error(e)
        }
    }

    async getAll(query) {
        try {
            if (Object.keys(query).length !== 0) {
                const {paramName, paramValue} = query
                if (paramName === "_id") return await ShopModel.findById(paramValue)
                return ShopModel.find({[paramName]: paramValue})
            }
                    return await ShopModel.find()
        } catch (e) {
            throw new Error(e)
        }
    }

    async getById(id) {
        try {
            return await ShopModel.findById(id)
        } catch (e) {
            throw new Error(e)
        }
    }

    async getByParam(paramName, paramValue) {
        try {
            return await ShopModel.findOne({[paramName]: paramValue})
        } catch (e) {
            throw new Error(e)
        }
    }

    async modifyById(id, paramData) {
        try {
            return await ShopModel.findByIdAndUpdate({id}, {paramData})
        } catch (e) {
            throw new Error(e)

        }
    }

    async modifyByParam(paramName, paramValue, dataToUpdate) {
        try {
            return await ShopModel.findOneAndUpdate({[paramName]: paramValue}, {dataToUpdate}, {new: true}, (error, shopData) => {
                if (error) return console.error(error)
                shopData.items.push(dataToUpdate)
                shopData.save((err, result) => {
                    return result
                })
            })
        } catch (e) {
            throw new Error(e)
        }
    }

    async delete(paramName, paramValue) {
        try {
            return await ShopModel.findOneAndRemove({[paramName]: paramValue})
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = ShopService
