export default function (paths) {
	return {
		module: {
			rules: [
				{
					test: /\.css$/,
					include: paths,
					use: [
						'style-loader',
						'css-loader'
					]
				}
			]
		}
	};
};
