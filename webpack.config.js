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
                test: /\.jpg$/,
                // use: [
                //     {
                //         loader: 'url-loader',
                //         // options: {
                //         //     limit: 2000
                //         // }
                //     }
                // ]
            }
        ]
    }
};