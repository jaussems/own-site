const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');




module.exports = {
    mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Output Management',
      }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
 
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};