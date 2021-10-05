const express = require('express')
const routesUser = require('./routes/routes.user')
const routesResource = require('./routes/routes.resources')
require('dotenv').config()

const PORT = process.env.PORT || 3333

const app = express()

app.use(express.json())
app.use(routesUser)
app.use(routesResource)

app.listen(PORT, () => {
  console.log('Server Start...')
})