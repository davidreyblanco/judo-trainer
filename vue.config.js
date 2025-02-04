const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: [
      'epi.dataxpan.com',
      'localhost',
      '127.0.0.1'
    ]
  }
})
