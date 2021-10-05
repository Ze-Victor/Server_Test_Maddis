const jwt = require('jsonwebtoken')

function authentication(request, response, next) {

  const token = request.header("Authorization")

  if (!token) {
    return response.sendStatus(401)
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, paylod) => {
      if (err) return response.sendStatus(403)
      request.user = paylod
      next()
    })
  }
}

module.exports = authentication