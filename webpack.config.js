const slsw = require('serverless-webpack');

module.exports = {
  entry: slsw.lib.entries,
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  target: 'node',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      }
    ]
  }
};