const knex = require('../database/index')

class resourceControllers {
  async index(request, response) {
    const resource = await knex('resource').select('*')

    return response.status(200).json(resource)
  }
  async create(request, response) {

    try {

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
  async update(request, response) {

    try {
      const id = request.params
      const {
        title,
        description,
        content,
        user_id
      } = request.body

      const resourceUpdate = {
        title,
        description,
        content,
        user_id
      }

      await knex('resource').update(resourceUpdate).where(id)

      return response.status(200).json({
        msg: 'Recurso alterado!'
      })

    } catch (err) {
      return response.status(400).json({
        error: err
      })
    }

  }
  async delete(request, response) {
    try {
      const id = request.query.id

      await knex('resource').where('id', id).del()

    } catch (err) {
      return response.status(400).json({
        error: err
      })
    }
  }
}

module.exports = resourceControllers