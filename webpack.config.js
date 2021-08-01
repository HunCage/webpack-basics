// const external = require("./helper");
// const path =require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizePlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    plugins: [
        new MiniCssExtractPlugin(), new optimizePlugin()
    ],
    // entry: "./src/start.js",
    entry: {
        "index": "./src/index.js",
        "profile": "./src/profile.js"
    },
    output: {
        // path: path.join(process.cwd(), 'dist'),
        // filename: '[name].min.js'
        filename: '[name].js',
        library: '_'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    // "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    // "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    // "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                // test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                test: /\.(woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.jpg$/,
                // use: [{
                    // loader: 'url-loader',
                    // options: {
                    //     name: '[name].[ext]',
                        // outputPath: 'img/'
                    }
                // }]
                // use: [
                //     {
                //         // options: {
                //         //     limit: 2000
                //         // }
                //     }
                // ]
            // }
        ]
    }
};