export default () => ({
	module: {
		rules: [
			{
				test: /\.sass$/,
				use: [
					{
						loader: 'sass-loader',
					},
				],
			},
		],
	},
})
