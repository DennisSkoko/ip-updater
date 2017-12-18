'use strict'

const path = require('path')

require('dotenv').config({
  path: path.resolve(__dirname, '..', '.env')
})

module.exports = () => ({
  app: {
    interval: 1000 * 60 * 60 * 24
  },

  logger: {
    level: process.env.LOG_LEVEL || 'info',
    timestamp: true,
    colors: true
  },

  ip: {
    url: 'https://ipapi.co/ip'
  }
})
