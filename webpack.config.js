const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');



module.exports = {
    entry: [
        './src/index.js',
        './src/style.scss',
    ],
    mode: 'development',
    devServer: {
        static: './dist',
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[id].[chunkhash].js',
        clean: true,
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
                test: /\.(sass|scss|css)$/,
                sideEffects: true,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(|ttf|woff2?)(\?v=\d+\.\d+\.\d+)?$/i,
                type: 'asset/resource',
            },
        ]
    },
    optimization: {
        minimize: true,
        runtimeChunk: 'single',

    },
}