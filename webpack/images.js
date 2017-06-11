export default () => ({
	module: {
		rules: [
			{
				resource: {
					include: [
						/\.ico$/,
						/\.jpg$/,
						/\.png$/,
						/\.svg$/,
					],
				},
				use: [
					{
						loader: 'file',
						options: {
							name: '[name].[ext]',
							useRelativePath: true,
						},
					},
				],
			},
		],
	},
})
