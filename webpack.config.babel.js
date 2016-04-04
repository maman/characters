import path from 'path'
import webpack from 'webpack'
import config from './webpack.main'

config.devtool = 'source-map'
config.debug = 'true'

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