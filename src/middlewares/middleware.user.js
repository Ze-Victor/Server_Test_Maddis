const Ajv = require('ajv')
const ajv = new Ajv()
const addFormats = require("ajv-formats")
const userSchema = require('../schema/schema.user')

addFormats(ajv)

function validarUsuario(request, response, next) {

  const user = request.body

  const validate = ajv.compile(userSchema)
  const valid = validate(user)

  if (valid) {
    next()
  } else {
    response.status(400).json({ msg: "Dados inválidos", erros: validate.errors })
  }
}

module.exports = validarUsuario