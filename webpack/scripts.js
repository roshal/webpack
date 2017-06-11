export default () => ({
	module: {
		rules: [
			{
				resource: {
					exclude: [
						/(?:\/|\\)node_modules(?:\/|\\)/,
					],
					include: [
						/\.js$/,
					],
				},
				use: [
					{
						loader: 'babel',
						options: {
							presets: [
								'env',
								'flow',
								'stage-2',
							],
						},
					},
				],
			},
		],
	},
})
