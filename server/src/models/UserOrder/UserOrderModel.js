const {Schema, model} = require("mongoose");
const ShopItemSchema = require("../ShopItem/ShopItemModel");

// todo probably i need to create a array of orders inside this schema and sort by date
const UserOrderSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    address: {type: String, required: true},
    order: {type: [ShopItemSchema], required: true}
})

const UserOrderModel = model('OrderHistory', UserOrderSchema)

module.exports = UserOrderModel
