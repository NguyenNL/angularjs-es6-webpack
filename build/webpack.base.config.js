var
    path = require('path'),
    ProgressBarPlugin = require('progress-bar-webpack-plugin')
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    ngAnnotatePlugin = require('ng-annotate-webpack-plugin')
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: {
        'babel-polyfill': 'babel-polyfill',
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].js',
        publicPath: '/'
    },

    module: {
        rules: [
            {
                // JS LOADER
                // Reference: https://github.com/babel/babel-loader
                // Transpile .js files using babel-loader
                // Compiles ES6 and ES7 into ES5 code
                test: /\.js$/,
                // loaders: ['ng-annotate', 'babel-loader'],
                exclude: /node_modules/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ["es2015", {"loose": true}]
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                exclude: /node_modules/,
                options: {
                    minimize: true,
                    removeComments: true,
                    collapseWhitespace: true
                }
            },
            {
                test: /\.css$/,
                use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                // you can specify a publicPath here
                                // by default it use publicPath in webpackOptions.output
                                publicPath: '../'
                            }
                        },
                        "css-loader"
                    ]
            },
            {
                test: /\.(styl|sass|scss|)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // {
                    //     loader: 'style-loader',
                    //     options: {
                    //         sourceMap: true
                    //     },
                    // },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: true
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'stylus-loader',
                        options: {

                        }
                    },
                ],
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: 'fonts/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/,
                loader: 'base64-inline-loader',
                query: {
                  name: 'img/[name].[hash:7].[ext]'
                }
              }

        ]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env': config[env.prod ? 'build' : 'dev'].env,
        //     'DEV': env.dev,
        //     'PROD': env.prod,
        //   }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            inject: 'body',
          }),
        new CleanWebpackPlugin(['dist'],{
            root: path.resolve(__dirname , '..')
        }
        ),
        new ngAnnotatePlugin({
            add: true,
            // other ng-annotate options here
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new ProgressBarPlugin({
            format: ' [:bar] ' + ':percent'.bold + ' (:msg)'
        })
    ],
    performance: {
        hints: false
    }

}
