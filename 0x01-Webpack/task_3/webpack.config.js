const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		all: [
			"./modules/header/header.js",
			"./modules/body/body.js",
			"./modules/footer/footer.js"
		],
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	mode: 'development',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							disable: true,
							bypassOnDebug: true
						},
					},
				],
			},
		],
	},
	devServer: {
		contentBase: path.join(__dirname, './public'),
		compress: true,
		port: 8564
  },
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin()
	],
};
