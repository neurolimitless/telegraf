const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1,
                        localIdentName: "[local]__[hash:base64:5]",
                        minimize: false
                    }
                },
                {loader: 'postcss-loader'},
            ]
        }, {
            test: /\.js$/,
            loaders: ['react-hot-loader/webpack'],
            include: path.join(__dirname, 'src')
        }, {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({options: {postcss: [precss, autoprefixer]}}),
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    node: {
        fs: 'empty'
    },
    target: 'node',
};
