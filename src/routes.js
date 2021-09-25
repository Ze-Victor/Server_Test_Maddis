const express = require('express')
const UserControllers = require('../src/controllers/userControllers')
const midUser = require('../src/middlewares/middleware.user')
const router = express.Router()

router.post('/', midUser)

const userControllers = new UserControllers

router.get('/', userControllers.index)

router.post('/', userControllers.create)

module.exports = router