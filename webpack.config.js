const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src/js')],
    extensions: ['.json', '.js'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8081,
    hot: true,
  },
};
