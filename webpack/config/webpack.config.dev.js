/**
 * user config for development
 */

let webpackMerge = require('webpack-merge');
let commonConfig = require('./webpack.config.com.js');
let helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',//webpack -d default use

    //入口文件输出配置
    output: {
        path: helpers.root('dist'),
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    module: {},

    //插件
    plugins: []
    
});
