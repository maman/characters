import path from 'path'
import webpack from 'webpack'
import HtmlPlugin from 'html-webpack-plugin'

const src = path.join(__dirname, './src')

let config = {
  target: 'web',
  cache: true,
  entry: path.join(src, '/index.js'),
  resolve: {
    root: src,
    modulesDirectories: ['node_modules', 'src']
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'standard'
    }],
    loaders: [{
      test: /\js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  plugins: [
    new webpack.IgnorePlugin(/ReactContext/),
    new HtmlPlugin({
      inject: true,
      title: 'Star Wars!'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${process.env.NODE_ENV || 'development'}"`,
    })
  ],
  output: {
    filename: '[hash].js',
    pathInfo: true,
    path: path.join(__dirname, 'tmp'),
    publicPath: '/'
  }
}

export default config
