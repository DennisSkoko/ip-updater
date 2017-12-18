'use strict'

const path = require('path')

require('dotenv').config({
  path: path.resolve(__dirname, '..', '.env')
})

module.exports = () => ({
  logger: {
    level: process.env.LOG_LEVEL || 'info',
    timestamp: true,
    colors: true
  }
})
