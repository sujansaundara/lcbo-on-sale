const HtmlWebpackPlugin = require('html-webpack-plugin');
    
module.exports = {
    entry: __dirname + '/src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader",
                    options: { minimize: true }
                  }
                ]
              }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:  __dirname + '/src/index.html'
        })
    ]
};