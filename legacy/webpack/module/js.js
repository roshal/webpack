export default function (paths) {
	return {
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'babel-loader',
							options: {
								presets: [
									'env',
									'flow',
								],
							},
						},
					],
				},
			]
		}
	};
};
