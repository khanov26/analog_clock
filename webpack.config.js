const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: [
            "./src/index.js"
        ]
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: [
                    MiniCssExtractPlugin.loader, // for production mode
                    // "style-loader", // for development mode
                    "css-loader",
                    "stylus-loader",
                ],
            },
        ],
    },
    devServer: {
        contentBase: "./dist",
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
};