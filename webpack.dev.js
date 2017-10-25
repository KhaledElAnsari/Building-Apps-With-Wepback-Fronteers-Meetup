const commonConfig = require("./webpack.config.js");
const path = require("path");
const webpackMerge = require("webpack-merge");

module.exports = webpackMerge(commonConfig, {
	output: {
		"path": path.join(process.cwd(), "dev-dest"),
		"filename": "[name].[id].js",
		"chunkFilename": "[id].[name].js"
	},
});