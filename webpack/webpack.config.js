/**
 * @author: steven
 * @date: 17/05/03
 */

 // process.stdout.write(process.env.npm_package_config_port); //获取设置的值
 // process.exit();

//线上版本pro
switch (process.env.NODE_ENV) {
    case 'pro':
    case 'production':
        module.exports = require('./config/webpack.config.pro');
        break;
    case 'dev':
    case 'development':
    default:
        module.exports = require('./config/webpack.config.dev');
}
