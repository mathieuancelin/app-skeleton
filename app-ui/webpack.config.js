var webpack = require('webpack');

module.exports = {
  output: {
    path: '../app/assets/javascripts',
    publicPath: '/assets/javascripts',
    filename: 'app.js',
    library: 'App',
    libraryTarget: 'umd'
  },
  entry: {
    app: ['./src/main.js']
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel-loader?stage=0&optional=runtime'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
