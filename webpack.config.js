// const path = require('path')
const webpack = require('webpack')

const javascript = {
  test: /\.(js)$/, 
  exclude: /node_modules/,
  use: [{
    loader: 'babel-loader',
    options: { presets: ['env'] } 
  }],
}

// const uglify = new webpack.optimize.UglifyJsPlugin({ // eslint-disable-line
//   compress: { warnings: false }
// })

module.exports = {
  entry: {
    App: './app.js'
  },
  // specify which kind of sourcemap to use
  devtool: 'source-map',
  //  kick it out to a file.
  output: {
    // path: path.resolve(__dirname, 'public', 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [javascript]
  },
  plugins: [
    // uglify
  ],
  target: 'node',
}

// webpack is cranky about some packages using a soon to be deprecated API
// process.noDeprecation = true;
