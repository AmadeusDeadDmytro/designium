const express = require('express')
const router = express.Router()
const { time } = require('../controllers/designium')

router.get('/', time)

module.exports = router