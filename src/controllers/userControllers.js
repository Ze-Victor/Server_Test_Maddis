class userControllers {
  index(request, response) {
    return response.status(200).json({
      msg: 'Teste GET'
    })
  }
}

module.exports = userControllers