const {Schema, model} = require("mongoose");
const ShopItemSchema = require("../ShopItem/ShopItemModel");

const extendedShopItemSchema = new Schema({
    item: {type: ShopItemSchema, required: true},
    quantity: {type: Number, required: true}
})
// todo probably i need to create a array of orders inside this schema and sort by date
const UserOrderSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    address: {type: String, required: true},
    order: {type: [extendedShopItemSchema], required: true},
    totalPrice: {type: Number, required: true}
})

const UserOrderModel = model('OrderHistory', UserOrderSchema)

module.exports = UserOrderModel
