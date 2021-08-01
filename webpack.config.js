// const external = require("./helper");
// const path =require("path");

module.exports = {
    entry: "./src/start.js",
    output: {
        // path: path.join(process.cwd(), 'dist'),
        // filename: '[name].min.js'
        filename: '[name].js',
        library: '_'
    }
};