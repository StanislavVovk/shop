const {Schema, model} = require("mongoose");
const ShopItemModel = require("../ShopItem/ShopItemModel");


const ShopSchema = new Schema({
    name: {type: String, required: true},
    items: {type: [ShopItemModel]}
})

const ShopModel = model('Shop', ShopSchema)

module.exports = ShopModel
