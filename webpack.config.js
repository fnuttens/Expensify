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
          'css-loader',
          'sass-loader'
        ]
      }]
    },
    mode: 'development',
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: publicPath,
      historyApiFallback: true
    }
  };
};
