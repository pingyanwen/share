var webpack = require('webpack');
module.exports = {
     mode: 'development',
     plugins: [
         new webpack.NamedModulesPlugin(),
         new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
     ],
    entry: './src/app.js',
    output: {
        path: __dirname + '/build',
        filename: "bundle.js",
        chunkFilename: '[name].[chunkhash:5].chunk.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'react', 'stage-2']
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        },{
            test: /\.less$/,
            use: [
                'style-loader',
                { loader: 'css-loader', options: { importLoaders: 1 } },
                'less-loader'
            ]
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader',
            options: {
                limit: 10000
            }
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file-loader"
        }, { test: /\.(woff|woff2)$/,
            loader:"url-loader"
        }, { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url-loader"
        }, { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url-loader"
        }]
    }
};
