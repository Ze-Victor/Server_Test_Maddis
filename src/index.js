const express = require('express')
const routesUser = require('./routes/routes.user')
const routesResource = require('./routes/routes.resources')
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 3333

const app = express()

app.use(cors())
app.use('/static', express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(routesUser)
app.use(routesResource)

app.listen(PORT, () => {
  console.log('Server Start...')
})