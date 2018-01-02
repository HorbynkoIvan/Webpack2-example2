var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
/* necessary for creating separate css file*/

var extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

module.exports = {
    /*entry: './src/js/app1.js',
     output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle1.js',
        publicPath: '/dist'
    },
    for single entry point*/
    entry: {
        app1: './src/js/app1.js',
        app2: './src/js/app2.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name]-bundle.js",
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        extractPlugin
    ]
};