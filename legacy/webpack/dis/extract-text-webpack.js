import extract_text_webpack_plugin from 'extract-text-webpack-plugin'
export default (paths) => ({
	module: {
		rules: [
			{
				test: /\.scss$/,
				include: paths,
				use: extract_text_webpack_plugin.extract({
					publicPath: '../',
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
						},
						{
							loader: 'sass-loader',
						},
					],
				}),
			},
			{
				test: /\.css$/,
				include: paths,
				use: extract_text_webpack_plugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
						},
					],
				}),
			},
		],
	},
	plugins: [
		new extract_text_webpack_plugin({
			path: './qwe/[name].css',
			disable: false,
		}),
	],
})
