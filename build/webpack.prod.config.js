const { DefinePlugin } = require('webpack');
const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  output: {
    path: resolve(process.cwd(), 'dist'),
  },
  plugins: [
    new DefinePlugin({
      BASE_URL: JSON.stringify('//www.example.com'),
    }),
    new CleanWebpackPlugin(),
  ],
};
