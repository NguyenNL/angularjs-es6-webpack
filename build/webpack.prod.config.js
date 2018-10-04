var
    path = require('path'),
    webpack = require('webpack'),
    merge = require('webpack-merge'),
    baseWebpackConfig = require('./webpack.base.config'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
    CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var webpackConfig;
webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    devtool: false,
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: {
                        drop_console: true
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({})
          ],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: "initial",
                    test: path.resolve(__dirname, "../node_modules"),
                    name: "vendor",
                    enforce: true
                },
                commons: {
                    chunks: "initial",
                    minChunks: 3,
                    name: "commons",
                    enforce: true
                }
                // styles: {
                //     name: 'styles',
                //     test: /\.(css|sass|scss|styl)$/,
                //     chunks: 'all',
                //     enforce: true
                // }
            }
        }
    },

    plugins: [
        new webpack.DefinePlugin({
            _PRODUCTION: JSON.stringify(true)
        })
        // new HtmlWebpackPlugin({
        //     filename: path.resolve(__dirname, '../dist/index.html'),
        //     template: 'src/index.html',
        //     inject: true,
        //     minify: {
        //         removeComments: true,
        //         collapseWhitespace: true,
        //         removeAttributeQuotes: true
        //     },
        //     chunksSortMode: 'dependency'
        // })

    ]
});

module.exports = webpackConfig