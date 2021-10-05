const knex = require('../database/index')

class resourceControllers {
  async index(request, response) {
    try {

      const { user_id, page = 1 } = request.query

      const query = knex('resource')
        .limit(5)
        .offset((page - 1) * 5)

      const countObj = knex('resource').count()

      if (user_id) {
        query
          .where({ user_id })
          .join('user', 'user.id', '=', 'resource.user_id')
          .select('resource.*', 'user.name')

        countObj
          .where({ user_id })
      } else {
        query
          .join('user', 'user.id', '=', 'resource.user_id')
          .select('resource.*', 'user.name')
      }

      const [count] = await countObj
      response.header('X-Total-Count', count["count"])

      const results = await query

      return response.status(200).json(results)

    } catch (err) {
      return response.status(400).json({
        error: err
      })
    }

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

      await knex('resource').insert(resource)

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
      const id = request.params.id

      await knex('resource').where('id', id).del()

      return response.status(200).json({
        msg: 'Recurso deletado!'
      })

    } catch (err) {
      return response.status(400).json({
        error: err
      })
    }
  }
}

module.exports = resourceControllers