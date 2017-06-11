import extract_text_plugin from 'extract-text-webpack-plugin'
export default (paths) => ({
	module: {
		rules: [
			{
				test: /\.scss$/,
				include: paths,
				use: extract_text_plugin.extract({
					publicPath: '../',
					fallback: 'style-loader',
					use: [
						'css-loader',
						'sass-loader',
					],
				}),
			},
			{
				test: /\.css$/,
				include: paths,
				use: extract_text_plugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
					],
				}),
			},
		],
	},
	plugins: [
		new extract_text_plugin('./css/[name].css'),
	],
})
