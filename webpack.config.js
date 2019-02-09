const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const publicPath = path.resolve(__dirname, 'public');

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    entry: './src/app.js',
    output: {
      path: publicPath,
      filename: 'bundle.js'
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css',
      }),
    ],
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /^.*\.js$/,
        exclude: /node_modules/
      }, {
        test: /^.*\.s?css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          },
        ]
      }]
    },
    mode: 'development',
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: publicPath,
      historyApiFallback: true
    }
  };
};
