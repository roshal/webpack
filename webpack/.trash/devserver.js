export default function (options) {
	return {
		devServer: {
			clientLogLevel: 'info',
			compress: true,
			contentBase: options.public,
			hot: true,
			// lazy: true,
			// poll: true,
			port: 80,
			publicPath: '/',
			// stats: 'errors-only',
		},
	}
}
