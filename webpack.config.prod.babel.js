import path from 'path'
import webpack from 'webpack'
// import ExtractTextPlugin from 'extract-text-webpack-plugin'
import config from './webpack.main'

config.devtool = 'source-map'
config.debug = false

config.plugins = [
  // new ExtractTextPlugin('starwars.[hash].css'),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    sourceMap: true,
    mangle: true,
    preserveComments: false,
    output: {
      comments: false
    }
  }),
  ...config.plugins
]

config.output.filename = 'starwars.[hash].js'
config.output.path = path.join(__dirname, 'dist')

export default config
