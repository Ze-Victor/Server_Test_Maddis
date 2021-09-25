const express = require('express')
const UserControllers = require('../src/controllers/userControllers')

const userControllers = new UserControllers

const routes = express.Router()

routes.get('/', userControllers.index)

module.exports = routes