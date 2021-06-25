const path = require('path');

module.exports = {
  entry: './src/about.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
};