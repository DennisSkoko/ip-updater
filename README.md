# IP Updater

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Pushes the current IP to a Github Gist.

## Requirements
- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/)

## Installation
To install the dependencies, just execute `npm install`

## Configuration
Before you can run the script, you will need to configure it.

First you will need to create a [Gist](https://gist.github.com/).
After that you will need to create a token so the script has access to update
the Gist. You can create it at your Github profile.

Once you got your Gist and token then create a file in the root folder of the
project with the name `.env`. Then add the id and the token in file. Example:

```
GITHUB_TOKEN=<enter your token here>
GIST_ID=<enter your gist id here>
```

You can optionally configure the log level in the file as well like:
```
LOG_LEVEL=info
```

## How to run
To start the script then simply just execute `npm start`.

## Testing
To test the application then execute `npm test`.
