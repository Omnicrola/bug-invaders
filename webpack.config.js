const path = require('path');

module.exports = {
    mode: 'development',
    watch: true,
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },


    cache: true,
    devtool: 'source-map',

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },

    stats: {
        colors: true,
        reasons: true
    }
};
