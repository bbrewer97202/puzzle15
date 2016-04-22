var path = require('path');
var webpack = require('webpack');

var SRC_DIR = path.resolve(__dirname, './src');
var DIST_DIR = path.resolve(__dirname, './dist');

var config = {

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [ SRC_DIR ]
            },
            {
                test: /\.css$/,
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            }
        ]
    },

    output: {
        path: DIST_DIR,
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.OldWatchingPlugin()
    ],

    entry: [
        SRC_DIR + '/index.js'
    ],
    devtool: 'cheap-module-eval-source-map',
    colors: true,
    progress: true

}

module.exports = config;
