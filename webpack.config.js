const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
/**
 * @type {import('webpack').Configuration}
 */
const config = {
  entry: "./src/tetris-game/index.ts",
  output: {
    path: path.resolve(__dirname, "./dist/tetris-game"),
    filename: "script/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts)|(tsx)$/,
        loader: "ts-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};

module.exports = config;
