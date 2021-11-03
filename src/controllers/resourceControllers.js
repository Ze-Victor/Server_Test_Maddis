const knex = require('../database/index')

class resourceControllers {
  async index(request, response) {
    try {

        const results = await knex('resource')
                        .join('user', 'user.id', '=', 'resource.user_id')
                        .select('resource.*', 'user.name')
  
      return response.status(200).json(results)

    } catch (err) {
      return response.status(400).json({
        error: err
      })
    }

  }
  async show(request, response){

    const {user_id} = request.params;

    try {
      const results = await knex('resource')
          .where({ user_id })
          .join('user', 'user.id', '=', 'resource.user_id')
          .select('resource.*', 'user.name')

      return response.status(200).json(results)
    } catch (err) {
      return response.status(400).json({
        error: err
      })
    }
  }
  async show_unique(request, response){
    const {id} = request.params;

    try {
      const results = await knex('resource')
          .where({ id })
          .select()
          .first();

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