const express = require('express')
const UserControllers = require('../controllers/userControllers')
const midUser = require('../middlewares/middleware.user')
const router = express.Router()

router.post('/user', midUser)
router.put('/user/:id', midUser)

const userControllers = new UserControllers

router.get('/user', userControllers.index)
router.post('/user', userControllers.create)
router.put('/user/:id', userControllers.update)
router.delete('/user/:id', userControllers.delete)

module.exports = router