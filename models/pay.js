const { Schema, model } = require('mongoose')

const Pay = new Schema({
    cardNumber: String,
    expirationDate: String,
    cvv: String,
    amount: String,
})

module.exports = model('Pay', Pay)