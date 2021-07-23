const path = require("path");
//Uncommment before production?
module.exports = {
    outputDir: path.resolve(__dirname, process.env.OUTPUT_DIR),
    assetsDir: process.env.ASSETS_DIR
  }