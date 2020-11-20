module.exports = {
  mode: process.env.NODE_ENV,
  devtool: 'source-map',
  entry: './client/index.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },

  devServer: {
    historyApiFallback: true,
    proxy: {
      '/': 'http://localhost:3000',
    },
    publicPath: '/build',
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['*', '.css', '.scss', '.js', '.jsx'],
  },
};
