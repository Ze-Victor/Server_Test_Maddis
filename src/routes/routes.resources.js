const express = require('express')
const ResourceControllers = require('../controllers/resourceControllers')
const midResource = require('../middlewares/middleware.resource')
const midAuth = require('../middlewares/middleware.authentication')
const router = express.Router()

router.get('/resource', midAuth)
router.post('/resource', midAuth, midResource)

router.put('/resource/:id', midResource)

const resourceControllers = new ResourceControllers

router.get('/resource', resourceControllers.index)
router.get('/resource/:user_id', resourceControllers.show)
router.get('/resource/id/:id', resourceControllers.show_unique)
router.post('/resource', resourceControllers.create)
router.put('/resource/:id', resourceControllers.update)
router.delete('/resource/:id', resourceControllers.delete)

module.exports = router