export default function () {
	return {
		module: {
			rules: [
				{
					test: /\.css$/,
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
					],
				},
			]
		}
	};
};
