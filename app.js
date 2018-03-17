const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const webpack = require('webpack')
const config = require('./webpack.config')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const { MongoClient } = require('mongodb')

const app = express()
const url = 'mongodb://localhost:27017'
const dbName = 'mnmltaskr'
const port = 8000

let db

async function startServer () {
  try {
    if (process.env.NODE_ENV !== 'production') {
      const compiler = webpack(config)

      app
        .use(devMiddleware(compiler, {
          noInfo: true, publicPath: config.output.publicPath
        }))
        .use(hotMiddleware(compiler))
    }

    const client = await MongoClient.connect(url)
    db = client.db(dbName)

    app
      .use(bodyParser.urlencoded({ extended: true }))
      .use(bodyParser.json())
      .use('/', express.static(path.join(process.cwd(), 'public')))

      // more routes here

      .listen(port, () => {
        console.log(`server live at http://localhost:${port}`)
      })
  } catch (e) {
    throw e
  }
}

startServer()