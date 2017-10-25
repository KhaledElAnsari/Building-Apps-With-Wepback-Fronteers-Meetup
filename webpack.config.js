// For more configuration options check the link below from Webpack documentaion
// https://webpack.js.org/configuration/

const path = require("path");
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

var config = {
	devtool: "source-map",

	resolve: {
		"extensions": [".js", ".ts", ".json", ".css", ".scss", ".html"],
		"modules": ["./node_modules", "./src"]
	},

	entry: {
		"app": ["./src/scripts/index.ts"],
		"polyfills": ["./src/scripts/polyfills.ts"]
	},

	output: {
		"path": path.join(process.cwd(), "dest"),
		"filename": "[name].[hash].js",
		"chunkFilename": "[hash].[name].js"
	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "ts-loader"
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					},
					{
						loader: "sass-loader"
					}
				]
			}
		]
	},

	plugins: [
		new CommonsChunkPlugin({
			name: ["app", "polyfills"]
		}),

		new HtmlWebpackPlugin({
			"template": "index.html",
			"filename": "index.html",
			"inject": "body"
		}),
	],

	devServer: {
		host: "0.0.0.0",
		port: "3000",
        historyApiFallback: true,
        stats: "minimal"
    }
};

module.exports = config;