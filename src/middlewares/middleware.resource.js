const Ajv = require('ajv');
const ajv = new Ajv();
const resourceSchema = require('../schema/schema.resource');

function validarRecurso(request, response, next) {

  const {
    title,
    description,
    content,
    user_id
  }= request.body;

  const file = request.file ? request.file.filename : "";

  const resource = {
    title,
    description,
    content,
    file,
    user_id
  }


  if(resource.user_id){
    resource.user_id = Number(resource.user_id)
  }

  const validate = ajv.compile(resourceSchema);
  const valid = validate(resource);

  if (valid) {
    next();
  } else {
    response.status(400).json({ msg: "Dados inválidos", erros: validate.errors });
  }
}

module.exports = validarRecurso;