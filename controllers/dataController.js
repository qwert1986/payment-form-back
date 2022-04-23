 const Pay = require('../models/pay')

const payHandler = async (req, res) => {
    try {
        const pay = new Pay({
            cardNumber: req.body.cardNumber,
            expirationDate: req.body.expirationDate,
            cvv: req.body.cvv,
            amount: req.body.amount
        }) 
        await pay.save(function(err, doc) {
            res.json({ _id: doc._id, amount: doc.amount});
        })
    }
    catch(e) {
        console.log(e)
    }
}

module.exports = payHandler