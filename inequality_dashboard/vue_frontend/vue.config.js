//   module.exports = {
//     chainWebpack: config => {
//       config
//         .plugin('html')
//         .tap(args => {
//           args[0].template = './templates/vue_frontend/index.html'
//           return args
//         })
//     }
//   }
const path = require("path");

module.exports = {
    outputDir: path.resolve(__dirname, "./templates/vue_frontend"),
    assetsDir: "../../static"
  }