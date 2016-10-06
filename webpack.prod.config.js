/**
 * @file webpack prod config file
 */
var webpack = require('webpack');
var config = require('./webpack.base.config');
var path = require('path');

config.entry = './src/index.js';
config.output = {
    path: path.resolve('dist') + '/',
    filename: 'circle-menu.min.js',
    library: 'circleMenu',
    libraryTarget: 'umd'
};

config.plugins = (config.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        compress: {
            warnings: false
        }
    })
]);
module.exports = config;
