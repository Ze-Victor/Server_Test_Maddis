const Ajv = require('ajv');
const ajv = new Ajv();
const resourceSchema = require('../schema/schema.resource');

function validarRecurso(request, response, next) {

  const resource = request.body;

  const validate = ajv.compile(resourceSchema);
  const valid = validate(resource);

  if (valid) {
    next();
  } else {
    response.status(400).json({ msg: "Dados inválidos", erros: validate.errors });
  }
}

module.exports = validarRecurso;