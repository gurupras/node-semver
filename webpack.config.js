const path = require('path')
const webpack = require('webpack')
const version = require('./package.json').version

module.exports = {
  entry: './semver.js',
  mode: 'production',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `semver.min.js`,
    library: 'semver',
    libraryTarget: 'window'
  },
  plugins: [
    new webpack.BannerPlugin(`semver@${version}`)
  ]
}

