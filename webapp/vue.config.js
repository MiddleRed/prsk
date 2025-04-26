module.exports = {
  pwa: {
    name: 'プロセカ Station',
    themeColor: '#A5EFE6'
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'プロセカ Station'
      return args
    })
    config.module
      .rule('worker')
      .test(/\.worker\.js$/)
      .use('worker-loader')
      .loader('worker-loader')
      .options({ inline: 'fallback' })
      .end()
    config.module.rule('js').exclude.add(/\.worker\.js$/)
  },
  configureWebpack: {
    externals: {
      scale: 'scale'
    }
  }
}
