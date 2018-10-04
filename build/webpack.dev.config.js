var
    webpack = require('webpack'),
    merge = require('webpack-merge'),
    baseWebpackConfig = require('./webpack.base.config'),
    HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    cache: false,
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
           _PRODUCTION: JSON.stringify(false)
          }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            inject: 'body'
        })
    ]
})
