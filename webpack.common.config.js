const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

commonConfig = {
    entry: {
        app: [
            'babel-polyfill',
            path.join(__dirname, 'src/entery/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath: "/"
    },
    module: {
        rules: [{
            test: /\.(js|jsx|mjs)$/,
            // use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src'),
            loader: require.resolve('babel-loader'),
            options: {
                plugins: [
                    ['import',{libraryName: 'antd', style: 'css'}]
                ]
            }
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
		host: '0.0.0.0',
		port:8000
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/entery/index.html')
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        })
    ],

    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            components: path.join(__dirname, 'src/components'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/actions'),
            reducers: path.join(__dirname, 'src/reducers'),
            mock: path.join(__dirname, 'mock')
        }
    }
};

module.exports = commonConfig;