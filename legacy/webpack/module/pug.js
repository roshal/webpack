export default function () {
	return {
		module: {
			rules: [
				{
					test: /\.pug$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].html',
							},
						},
						{
							loader: 'pug-html-loader',
						},
					],
				},
			],
		},
	}
}
