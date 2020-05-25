const webpack = require('webpack')
const { CleanWebpackPlugin }  = require('clean-webpack-plugin')

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            BASE_URL: JSON.stringify('//www.example.com')
        }),
        new CleanWebpackPlugin()
    ]
}