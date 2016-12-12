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
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
            }
        ]
    }
};
