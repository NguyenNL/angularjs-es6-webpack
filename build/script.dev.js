process.env.NODE_ENV = 'development'
require('colors')
var
    path = require('path'),
    express = require('express'),
    webpack = require('webpack'),
    opn = require('opn'),
    webpackConfig = require('./webpack.dev.config'),
    webpackHotMiddleware = require('webpack-hot-middleware')
    app = express();
    var cors = require('cors')
    var port = 3001
    var host = 'localhost'
    var uri = 'http://localhost:' + port


    var compiler = webpack(webpackConfig);


    var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true,
    contentBase: 'src',
    stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
      }
})

// var hotMiddleware = require('webpack-hot-middleware')(compiler, {
//     log: function () {}
// })
//
// // serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(webpackHotMiddleware(compiler));

app.get('*', function response(req, res, next) {
    // res.write(devMiddleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    // res.end();
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
  });
  app.use(cors())


module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    }

    // open browser if set so in /config/index.js
    if (true) {
        devMiddleware.waitUntilValid(function () {
            opn(uri)
        })
    }
});
