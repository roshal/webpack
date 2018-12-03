//
// import p__css_entry_webpack_plugin from 'css-entry-webpack-plugin'
import p__extract_text_webpack_plugin from 'extract-text-webpack-plugin'
import p__mini_css_extract_plugin from 'mini-css-extract-plugin'
//
// import {
// 	PrefetchPlugin as p__webpack__prefetch_plugin,
// } from 'webpack'
import {
	join as p__path__join,
} from 'path'
//
export default (env) => {
	// const plugin__css_entry_webpack_plugin = new p__css_entry_webpack_plugin({
	// 	output: {
	// 		filename: '[name].css',
	// 	},
	// })
	const plugin__extract_text_webpack_plugin = new p__extract_text_webpack_plugin({
		allChunks: env.produce,
		filename: '[name].css',
		ignoreOrder: true,
	})
	const plugin__mini_css_extract_plugin = new p__mini_css_extract_plugin({
		filename: '[name].css',
		chunkFilename: '[id].css',
	})
	return {
		module: {
			rules: [
				{
					resource: {
						exclude: [
							p__path__join(__dirname, '..', 'node_modules'),
						],
						include: [
							p__path__join(__dirname, '..', 'source', 'styles'),
						],
						test: [
							/\.sass$/,
						],
					},
					// use: plugin__extract_text_webpack_plugin.extract({
					// 	fallback: [
					// 		{
					// 			loader: 'style-loader',
					// 			options: {
					// 				convertToAbsoluteUrls: env.produce,
					// 				sourceMap: env.develop,
					// 			},
					// 		},
					// 	],
						use: [
							{
								loader: 'css-loader',
								options: {
									minimize: env.produce ? {
										discardComments: {
											removeAll: true,
										},
									} : false,
									sourceMap: env.develop,
								},
							},
							{
								loader: 'sass-loader',
								options: {
									sourceMap: env.develop,
								},
							},
						],
					// }),
				},
				{
					resource: {
						exclude: [
							p__path__join(__dirname, '..', 'node_modules'),
						],
						include: [
							p__path__join(__dirname, '..', 'source', 'styles'),
						],
						test: [
							/\.css$/,
						],
					},
					use: [
						plugin__mini_css_extract_plugin.loader,
						{
							loader: 'css-loader',
							options: {
								minimize: env.produce ? {
									discardComments: {
										removeAll: true,
									},
								} : false,
							},
						},
					],
				},
			],
		},
		plugins: [
			plugin__extract_text_webpack_plugin,
			plugin__mini_css_extract_plugin,
			new p__webpack__prefetch_plugin(p__path__join(__dirname, '..', 'source'), './styles/source.sass'),
		],
	}
}
