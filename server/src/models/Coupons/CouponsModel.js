const {Schema, model} = require("mongoose");

const CouponsSchema = new Schema({
    name: {type: String, required: true},
    codeDisc: {type: String, required: true},
    discount: {type: Number, required: true},
    imageURL: {type: String, required:true}
})

const CouponsModel = model('Coupons', CouponsSchema)

module.exports = CouponsModel
