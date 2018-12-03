export default function () {
	return {
		module: {
			rules: [
				{
					test: /\.sass$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
							},
						},
						{
							loader: 'extract-loader',
						},
						{
							loader: 'css-loader',
						},
						{
							loader: 'sass-loader',
						},
					],
				},
			],
		},
	}
}
