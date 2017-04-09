/**
 * Created by Denis on 09.04.2017.
 */
let debug = process.env.NODE_ENV !== 'production';
console.log(debug);
let webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: debug ? 'inline-sourcemap' : '',
    entry: __dirname + '/Application.js',
    output: {
        path: __dirname + '/dist/js',
        filename: debug ? 'application.js' : 'application.min.js',
        libraryTarget: 'var',
        library: 'Application'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    plugins: debug ? [] : [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            minimize: debug,
            compress: {
                sequences: true,
                booleans: true,
                loops: true,
                unused: true,
                warnings: true,
                drop_console: false,
                unsafe: true
            }
        }),
    ]
};