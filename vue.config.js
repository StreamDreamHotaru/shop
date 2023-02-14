const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "src/assets/scss/base.scss";'
      },
      postcss: {
        postcssOptions: {
          plugins: [
            require('postcss-pxtorem')({ rootValue: 200, propList: ['*'] })
          ]
        }
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7001'
      }
    }
  }
})
