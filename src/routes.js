const express = require('express')

const routes = express.Router()

routes.get('/', (request, response) => {
  return response.status(200).json({
    msg: 'Teste'
  })
})

module.exports = routes