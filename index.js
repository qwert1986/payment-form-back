config = require('./config')

const express = require('express')
const mongoose = require('mongoose')
const dataRouter = require('./routers/dataRouter')
const cors = require('cors')

const PORT = 8000
const app = express()
app.use(cors())
app.use(express.json())
app.use(dataRouter)

const start = async () => {
    try {
        await mongoose.connect(config.mongoDbString)
        app.listen(PORT, () => console.log(`Server started, port ${PORT}`))
    }
    catch(e) {
        console.log(e)
    }
}

start()