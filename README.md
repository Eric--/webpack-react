### webpack-react
* react step by step
* upgrade nodejs6.10+webpack2+react16
### 执行
* webpack --display-error-details  使用默认配置
* webpack --config XXX.js 使用另一份配置文件（比如webpack.config2.js）来打包
* webpack -p 线上版本，-p 压缩
* webpack -d 开发版本，-d debug    
* webpack-dev-server 监听自动刷新，开发调试
* package.json 要保存当前webpack和webpack-dev-server的版本，所以项目下也要安装
webpack和webpack-dev-server
* webpack --display-modules --sort-modules-by size 按module大小排序
* webpack-bundle-analyzer 包大小的可视化分析工具，优化打包大小很有用