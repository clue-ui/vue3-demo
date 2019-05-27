// vue.config.js
const path = require('path')

module.exports = {
  devServer: {
    // host: 'dev.vsco.com',
    // proxy
    // proxy: {
    //   '/api': {
    //     target: 'http://vsco.com',
    //     ws: true,
    //     changeOrigin: true,
    //     logLevel: 'debug'
    //   }
    // }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/variables.scss";`
      }
    }
  }
}
