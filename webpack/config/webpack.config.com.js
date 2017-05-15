/**
 * user common config
 */

let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let CopyWebpackPlugin = require('copy-webpack-plugin');

let path = require('path');
let helpers = require('./helpers');

module.exports = {

    //入口文件配置
    entry: {
        app: helpers.root('src', 'app/app.jsx'),
        vendor: helpers.root('src', 'js/vendor.js')
    },

    //加载器配置
    module: {
        rules: [{
            test: /\.css$/,
            include: helpers.root('src', 'app'),
            use: [{
                loader: 'to-string-loader'
            }, {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                }
            }, {
                loader: 'postcss-loader'
            }]
        }, {
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader?sourceMap'
        }, {
            //.js jsx 文件使用 babel-loader 来编译处理
            test: /\.js|jsx$/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            // support for .html as raw text
            test: /\.html$/,
            loader: 'raw-loader'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'file-loader?name=/[hash:8].[name].[ext]'
        }]
    },

    //插件
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            minChunks: Infinity,
            name: ['app', 'vendor']
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            inject: true
        }),
        //分析插件
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: './reports.index.html',
            openAnalyzer: false
        }),
        //自定义插件
        new webpack.LoaderOptionsPlugin({
        }),
        new CopyWebpackPlugin([
            { from: helpers.root('src', 'css'), to: 'css'}
        ])
    ],
    //其它解决方案配置
    resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['.ts', '.js', '.jsx', '.json', '.scss']
    }
};
