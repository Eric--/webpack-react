/**
 * user config for production
 */

let webpack = require('webpack');
let webpackMerge = require('webpack-merge');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CompressionPlugin = require("compression-webpack-plugin");
let commonConfig = require('./webpack.config.com.js');
let helpers = require('./helpers');

let relPath = './lib/',
    publicPath = '';
if (process.env.NODE_ABS) { //设置打包路径
    relPath = '';
    publicPath = '/';
}

module.exports = webpackMerge(commonConfig, {

    devtool: 'cheap-module-source-map',

    output: {
        path: helpers.root('dist'), // path+filename js package path
        publicPath: publicPath, //inject html use relative path or absolute path
        filename: relPath + '[name].[hash].js',
        chunkFilename: relPath + '[id].[hash].chunk.js'
    },

    module: {
        //加载器配置
        rules: [{
            //将样式抽取出来为独立的文件
            test: /\.css$/,
            exclude: helpers.root('src', 'app'),
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
        }]
    },

    //插件
    plugins: [
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.html$/,
            threshold: 10240,
            minRatio: 0.3
        }),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),

        new ExtractTextPlugin('[name].css')
    ]
});
