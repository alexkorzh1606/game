const path = require('path');

module.exports = {
  entry: './game.ts',
  module: {
      rules: [
          {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/,
          },
      ],
  },
  resolve: {
      extensions: ['.tsx', '.ts', '.js'],
  },
  mode: "development",
  watch: true,
  devtool: "inline-cheap-source-map",
  watchOptions: {
      ignored: ["node_modules/**"]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  }
};