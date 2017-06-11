export default () => ({
	module: {
		rules: [
			{
				resource: {
					include: [
						/\.pug$/,
					],
				},
				use: [
					{
						loader: 'file',
						options: {
							name: '[name].html',
						},
					},
					{
						loader: 'pug-html',
					},
				],
			},
		],
	},
})
