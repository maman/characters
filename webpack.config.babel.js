import path from 'path'
import webpack from 'webpack'
import config from './webpack.main'

config.devtool = 'source-map'
config.debug = 'true'

config.module.loaders = [
  {
    test: /\.css$/,
    loaders: [
      'style',
      'css?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:3]',
      'autoprefixer'
    ]
  },
  ...config.module.loaders
]

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  ...config.plugins
]

config.devServer = {
  contentBase: path.join(__dirname, 'tmp'),
  noInfo: true,
  hot: true,
  inline: true,
  historyApiFallback: true
}

export default config
