const config = require('../config')

const Router = require('express')
const router= new Router()

const payHandler = require('../controllers/dataController')

router.post(config.paymentEndpoint, payHandler)

module.exports = router