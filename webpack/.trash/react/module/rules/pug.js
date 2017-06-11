export default () => ({
	module: {
		rules: [
			{
				test: /\.pug$/,
				use: [
					{
						loader: 'pug-loader',
					},
				],
			},
		],
	},
})
