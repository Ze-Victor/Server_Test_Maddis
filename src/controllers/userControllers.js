const knex = require('../database/index')

class userControllers {
  async index(request, response) {
    const user = await knex('user').select('*')

    return response.status(200).json(user)
  }
  async create(request, response) {

    try {

      const {
        name,
        email,
        user,
        password
      } = request.body

      const user_insert = {
        name,
        email,
        user,
        password
      }

      await knex('user').insert(user_insert)

      return response.status(200).json({
        msg: "Usuário inserido!"
      })
    }
    catch (err) {
      return response.status(400).json({
        error: err
      })
    }

  }
  async update(request, response) {

    try {
      const id = request.params
      const {
        name,
        email,
        user,
        password
      } = request.body

      const userUpdate = {
        name,
        email,
        user,
        password
      }

      await knex('user').update(userUpdate).where(id)

      return response.status(200).json({
        msg: 'Usuário alterado!'
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

      await knex('user').where(id).del()

    } catch (err) {
      return response.status(400).json({
        error: err
      })
    }
  }
}

module.exports = userControllers