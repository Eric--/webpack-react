1.  webpack --display-error-details //执行

2.  webpack --config XXX.js   //使用另一份配置文件（比如webpack.config2.js）来打包

3.  webpack --watch   //监听变动并自动打包

4.  webpack -p    //压缩混淆脚本，这个非常非常重要！

5.  webpack -d    //生成map映射文件，告知哪些模块被最终打包到哪里了

6.  webpack-dev-server --progress --colors  //监听自动刷新

7.  webpack --display-error-details    //打印错误细节，查找原因

8.  webpack.config.pro.js 中没有配置webpack-dev-server,所以启动会报错
    要使用正常服务器启动

9.  package.json 要保存当前webpack和webpack-dev-server的版本，所以项目下也要安装webpack和webpack-dev-server

10. webpack --colors --profile --display-modules --sort-modules-by size

11. 后来又发现的一个更屌的可视化分析工具 webpack-bundle-analyzer

