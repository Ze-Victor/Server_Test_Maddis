const knex = require('../database/index')

class resourceControllers {
  async index(request, response) {
    const resource = await knex('resource').select('*')

    return response.status(200).json(resource)
  }
  async create(request, response) {
    const {
      title,
      description,
      content,
      user_id
    } = request.body

    const resource = {
      title,
      description,
      content,
      user_id
    }

    try {
      await knex('resource').insert(request.body)

      return response.status(201).json({
        msg: 'Recurso inserido!'
      })
    } catch (err) {
      return response.status(400).json({
        error: err
      })
    }

  }
}

module.exports = resourceControllers