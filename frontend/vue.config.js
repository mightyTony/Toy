const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const path = require('path')

module.exports = {
  outputDir : path.resolve(__dirname, "../backend/src/main/resources/static") ,

  devServer : {
    port : 7777, // vue 서버 포트는 4860 
    proxy : {
      'api': {
        // 'api' 로 들어오면 포트 9999(스프링 서버)로 보낸다.
        target: 'http://localhost:9999',
        changeOrigin: true // cross origin 허용
      }
    }
  }
}