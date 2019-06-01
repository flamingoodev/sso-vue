const path = require('path')
const config = require('./src/config')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: '/sso',
  lintOnSave: true,
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: config.title,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
