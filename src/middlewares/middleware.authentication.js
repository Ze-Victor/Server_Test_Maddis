const jwt = require('jsonwebtoken');

function authentication(request, response, next) {

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.sendStatus(401);
  }

  const [, token] = authHeader.split(' ');

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, paylod) => {
    if (err) return response.sendStatus(403)
    request.user = paylod;
    next();
  })
}

module.exports = authentication;