const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output:{
        path: path.join(__dirname, '/dist'),
        filename: 'test_bundle.js'
    },
    module:{
        rules:[
            {test: /\.js$|jsx/, loader: 'babel-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.svg$/, loader: 'svg-url-loader'}
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};