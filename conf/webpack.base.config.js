import Config from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
export default new Config().merge({
  entry: './client/index.js',
  output: {
    path: __dirname + '/../public',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/../client/index.html',
      inject: "body"
    })]
});