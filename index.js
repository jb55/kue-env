var env = process.env

module.exports = function (kue) {
  var settings = {
    prefix: env.KUE_PREFIX,
    redis: {
      port: env.KUE_REDIS_PORT,
      host: env.KUE_REDIS_HOST,
      auth: env.KUE_REDIS_AUTH,
      db: env.KUE_DB
    }
  }

  return kue.createQueue(settings)
}
