const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send(require('../../data'))
})

module.exports = router
