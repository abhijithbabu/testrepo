/*
 * Copyright (c) 2019. Touchcast
 */

var path = require('path');
var hwp = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/App.tsx'),
    output: {
        filename: 'test.min.js',
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            exclude: /node_modules/,
            test: /\.jsx$/,
            loader: 'babel-loader'
        }, {
            exclude: /node_modules/,
            test: /\.ts$/,
            loader: 'babel-loader'
        }, {
            exclude: /node_modules/,
            test: /\.tsx$/,
            loader: 'babel-loader'
        }, {
            test: /\.(png|woff|woff2|eot|otf|ttf|svg)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }
            ]
        }, {
            test: /\.scss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            },
                {
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                },
                "sass-loader"
            ]
        }]
    },
    plugins: [
        new hwp({template: path.join(__dirname, '/src/index.html')}),
        new MiniCssExtractPlugin({
            filename: 'test.min.css',
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    }
}