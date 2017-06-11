import webpack from 'webpack'
export default function () {
	return {
		plugins: [
			new webpack.optimize.UglifyJsPlugin({
				comments: false,
				// sourceMap: true,
				// compress: {
				// 	warnings: false,
				// },
			})
		],
	}
}
