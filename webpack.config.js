const path = require('path');

module.exports = {
    entry: [
    './src/index',
    ],
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: (pathData) => {
            const filepath = path
              .dirname(pathData.filename)
              .split("/")
              .slice(1)
              .join("/");
            return `${filepath}/[name].[hash][ext][query]`;
          },
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { outputPath: './', name: 'style.css'}
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(svng)$/i,
                type: 'asset/resource',
            },
            {
               test: /\.(woff|woff2|eot|ttf|otf)$/i,
               type: 'asset/resource',
            },
        ]
    }
    
}