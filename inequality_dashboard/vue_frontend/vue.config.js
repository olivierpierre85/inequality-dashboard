  module.exports = {
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
          args[0].template = './templates/vue_frontend/index.html'
          return args
        })
    }
  }