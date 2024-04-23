const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');



module.exports = {
    entry: [
        './src/index.js',
    ],
    mode: 'development',
    devServer: {
        static: './dist',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[id].[chunkhash].js',
        assetModuleFilename: (pathData) => {
            const filepath = path
                .dirname(pathData.filename)
                .split("/")
                .slice(1)
                .join("/");
            return `${filepath}/[name][ext]`;
        },
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    }), new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                generator: {
                    filename: 'static/[name][ext]',
                },
            },

            {
                test: /\.(sass|scss)$/,
                sideEffects: true,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                type: "asset/inline",
            }
        ]
    },
    optimization: {
        minimize: true,
        runtimeChunk: 'single',
        minimizer: [
            new CssMinimizerPlugin()
        ],
    },


}