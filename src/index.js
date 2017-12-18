'use strict'

const ctx = require('./context')()

module.exports = () => {
  const push = () => ctx.ip.fetch()

  const loop = () => push()
    .then(ip => {
      ctx.logger.info('Pushed the IP to the gist', { ip })
    })
    .catch(err => ctx.logger.error(err))
    .then(() => {
      setTimeout(loop, ctx.settings.app.interval)
    })

  return {
    run () {
      ctx.logger.info('IP Updater has started')
      loop()
    }
  }
}
