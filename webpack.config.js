const webpack = require('webpack')
const merge = require('webpack-merge')
const sharedConfig = require('./webpack.config.shared')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const path = require('path')
const { env } = require('process')

module.exports = merge(sharedConfig, {
  mode: 'production',
  entry: './lib/index.js',
  output: {
    filename: 'index.js',
    path:  path.join(__dirname, 'dist'),
    library: "jiraffe-validator",
    libraryTarget: "umd"
  },
  stats: 'normal',
  plugins: [
    new webpack.EnvironmentPlugin(JSON.parse(JSON.stringify(env))),
    new CaseSensitivePathsPlugin()
  ],
})
