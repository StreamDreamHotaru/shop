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
  chainWebpack: (config) => {
    config.module.rules.delete('svg')
  },
  configureWebpack: {
    externals: {
      AMap: 'AMap',
      AMapUI: 'AMapUI'
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'icon-[name]'
            }
          }
        }
      ]
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
