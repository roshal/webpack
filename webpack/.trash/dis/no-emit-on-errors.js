import webpack from 'webpack'
export default () => ({
	plugins: [
		new webpack.SourceMapDevToolPlugin(),
	],
})
