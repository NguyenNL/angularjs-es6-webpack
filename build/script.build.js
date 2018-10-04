require('colors')
var
    path = require('path')
    webpackConfig = require('./webpack.prod.config'),
    outputFolder = 'web_app',
    outputPath = path.resolve(__dirname, '../' + outputFolder),
    webpack = require('webpack')
webpack(webpackConfig, function (err, stats) {
    if (err) throw err
    process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n')
})
