const path = require('path')
const config = require('./src/config')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: '/sso',
  lintOnSave: true,
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    openPage: 'login',
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: `http://1.15.97.54`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
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
