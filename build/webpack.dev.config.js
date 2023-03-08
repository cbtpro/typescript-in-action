const { DefinePlugin } = require('webpack');

module.exports = {
  // 控制生成sourcemap https://webpack.docschina.org/configuration/devtool/#devtool
  devtool: 'eval-source-map',
  devServer: {
    client: {
      // 开启客户端错误遮罩 https://webpack.docschina.org/configuration/dev-server/#overlay
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  plugins: [
    new DefinePlugin({
      BASE_URL: JSON.stringify('//dev.example.com'),
    }),
  ],
};
