const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        bundle: ["./src/index.tsx"],
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name].js",
    },
    resolve: {
        extensions: ["", ".webpack.js", ".tsx", ".ts", ".js"],
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
            },
        ],
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader", },
        ],
    },
};
