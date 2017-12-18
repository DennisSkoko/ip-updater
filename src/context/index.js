'use strict'

const modules = [
  { name: 'settings', path: '../../conf/settings.js' },
  { name: 'logger', path: './logger' }
]

module.exports = () => {
  const res = {}

  modules.forEach(module => {
    res[module.name] = require(module.path)(res)
  })

  return res
}
