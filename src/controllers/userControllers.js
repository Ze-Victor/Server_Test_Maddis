const knex = require('../database/index')

class userControllers {
  async index(request, response) {
    const user = await knex('user').select('*')

    return response.status(200).json(user)
  }
  async create(request, response) {

    await knex('user').insert(request.body)

    return response.status(200).json({
      msg: "Usuário inserido!"
    })
  }
}

module.exports = userControllers