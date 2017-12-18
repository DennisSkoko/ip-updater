'use strict'

module.exports = ({ settings, http }) => ({
  fetch: () => http.get(settings.ip.url)
    .then(res => res.data)
})
