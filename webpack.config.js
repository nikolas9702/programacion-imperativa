var config = {
  entry: './app.js',
  output: {
    path: 'C:\\wamp64\\www\\pr_react\\build',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};

module.exports = config;