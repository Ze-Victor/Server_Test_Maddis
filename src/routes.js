const express = require('express')
const UserControllers = require('../src/controllers/userControllers')
const ResourceControllers = require('../src/controllers/resourceControllers')
const midUser = require('../src/middlewares/middleware.user')
const midResource = require('../src/middlewares/middleware.resource')
const router = express.Router()

router.post('/user', midUser)
router.post('/resource', midResource)

const userControllers = new UserControllers
const resourceControllers = new ResourceControllers

router.get('/user', userControllers.index)
router.post('/user', userControllers.create)

router.get('/resource', resourceControllers.index)
router.post('/resource', resourceControllers.create)

module.exports = router