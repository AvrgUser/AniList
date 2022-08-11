const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    pages: {
      index: {
        entry: 'src/main.ts',
        template: 'public/index.html',
        filename: 'index.html',
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
      auth: 'src/auth/auth.ts',
      reg: 'src/auth/reg.ts'
    },
  transpileDependencies: true
})
