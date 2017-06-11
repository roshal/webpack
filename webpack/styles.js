export default (env) => ({
	module: {
		rules: [
			{
				resource: {
					include: [
						/\.sass$/,
					],
				},
				use: [
					{
						loader: 'style',
						options: {
							convertToAbsoluteUrls: env.produce,
							sourceMap: env.develop,
						},
					},
					{
						loader: 'css',
						options: {
							minimize: env.produce,
							sourceMap: env.develop,
						},
					},
					{
						loader: 'sass',
						options: {
							sourceMap: env.develop,
						},
					},
				],
			},
		],
	},
})
