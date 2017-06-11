import webpack from 'webpack'
export default () => ({
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'chunk',
		}),
	],
})
