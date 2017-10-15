var path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output: {
        path: path.resolve('/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot-loader/webpack', 'babel-loader'],
            include: path.join(__dirname, 'src')
        }],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
};
