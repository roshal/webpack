import webpack from 'webpack'
export default () => ({
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			comments: false,
			// sourceMap: true,
			// compress: {
			// 	warnings: false,
			// },
		})
	],
})
