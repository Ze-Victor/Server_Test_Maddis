const express = require('express')
const ResourceControllers = require('../controllers/resourceControllers')
const midResource = require('../middlewares/middleware.resource')
const router = express.Router()

router.post('/resource', midResource)
router.put('/resource/:id', midResource)

const resourceControllers = new ResourceControllers

router.get('/resource', resourceControllers.index)
router.post('/resource', resourceControllers.create)
router.put('/resource/:id', resourceControllers.update)
router.delete('/resource/:id', resourceControllers.delete)

module.exports = router