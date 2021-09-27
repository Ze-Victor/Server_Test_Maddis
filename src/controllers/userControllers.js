const knex = require('../database/index')

class userControllers {
  async index(request, response) {
    const user = await knex('user').select('*')

    return response.status(200).json(user)
  }
  async create(request, response) {

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
    try {
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
}

module.exports = userControllers