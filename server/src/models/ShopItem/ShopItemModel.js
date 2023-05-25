const {Schema} = require("mongoose");


const ShopItemSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    imageURL: {type: String, required: true},
    price: {type: Number, required: true}
})

module.exports = ShopItemSchema
