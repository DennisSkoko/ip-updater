'use strict'

module.exports = ({ settings, http }) => ({
  update: content => {
    const data = { files: {} }
    data.files[settings.gists.filename] = { content }

    return http.patch(settings.gists.url, data, {
      headers: {
        'Authorization': 'token ' + settings.gists.token,
        'Accept': 'application/vnd.github.v3+json'
      }
    })
  }
})
