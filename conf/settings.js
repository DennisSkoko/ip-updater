'use strict'

const path = require('path')

require('dotenv').config({
  path: path.resolve(__dirname, '..', '.env')
})

module.exports = () => ({
  app: {
    interval: 5000 //1000 * 60 * 60 * 24
  },

  logger: {
    level: process.env.LOG_LEVEL || 'info',
    timestamp: true,
    colors: true
  },

  ip: {
    url: 'https://ipapi.co/ip'
  },

  gists: {
    url: 'https://api.github.com/gists/' + (process.env.GIST_ID || 'invalid'),
    token: process.env.GITHUB_TOKEN || 'invalid',
    filename: 'ip.txt'
  }
})
