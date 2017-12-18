'use strict'

const ctx = require('./context')()

module.exports = () => ({
  run () {
    ctx.logger.info('IP Updater has started')
  }
})
