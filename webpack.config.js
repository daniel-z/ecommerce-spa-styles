const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/main.scss'],
  devtool: "source-map",
  module: {
    rules: [{
        test: /\.scss$/,
        use: [
					{
						loader: 'file-loader',
						options: {
              name: '[name].css',
              sourceMap: true
						}
					},
					{
            loader: 'extract-loader',
            options: {
              sourceMap: true
            }
					},
					{
						loader: 'css-loader?-url',
            options: {
              sourceMap: true
            }
					},
					{
						loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
					},
					{
						loader: 'sass-loader',
            options: {
              sourceMap: true
            }
					}
				]
    }]
  },

};