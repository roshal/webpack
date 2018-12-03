// import extract_text_webpack_plugin from 'extract-text-webpack-plugin'
// import html_webpack_plugin         from 'html-webpack-plugin'
// import uglifyjs_webpack_plugin     from 'uglifyjs-webpack-plugin'
import webpack                     from 'webpack'
export default function (options) {
	return {
		context: options.source,
		entry: {
			common: './common',
		},
		output: {
			filename: '[name].js',
			path: options.public,
			publicPath: '/',
		},
		plugins: [
			// new extract_text_webpack_plugin('common.css'),
			// new html_webpack_plugin({
			// 	template: 'index.html',
			// }),
			// new uglifyjs_webpack_plugin(),
			new webpack.optimize.UglifyJsPlugin(),
			new webpack.HotModuleReplacementPlugin(),
			new webpack.SourceMapDevToolPlugin(),
		],
	}
}
