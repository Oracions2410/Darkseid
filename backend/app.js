const express = require('express')
const app = express()
const cors = require('cors')

//const cors = require('./api/middlewares/cors')
const productsRoutes = require('./api/routes/products')


app.use('/ping', (req, res) => {
    res.send(`Server is running on <span style="font-size: 16px;font-weight: bold;color:#007bff;">${req.protocol}://${req.get('host')}....</span>    :-)`)
})

app.use(cors({ origin: 'http://localhost:3000' }))

app.use('/api/products', productsRoutes)

module.exports = app