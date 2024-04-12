const path = require('path');

module.exports = {
    entry: [
        './src/index.js',
        './src/style.scss'
    ],
    mode: 'development',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
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
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [],
                }, 
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: { outputPath: '', name: 'style.css'}
                        },
                        'sass-loader'
                    ]
                },
                
            ]
    }
   // options: { outputPath: '', name: 'style.css'}
}