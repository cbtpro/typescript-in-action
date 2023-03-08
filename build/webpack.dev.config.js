const webpack = require('webpack')

module.exports = {
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            BASE_URL: JSON.stringify('//dev.example.com')
        })
    ]
}