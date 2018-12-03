//
import p__webpack_stylish from 'webpack-stylish'
//
//
import {
	// optimize as webpack__optimize,
	PrefetchPlugin as webpack__prefetch_plugin,
} from 'webpack'
import {
	join as p__path__join,
} from 'path'
//
export default () => {
	return {
		context: p__path__join(__dirname, '..', 'source'),
		entry: {
			'source': './scripts/source.js',
		},
		output: {
			//	chunkFilename: 'scripts/[name].js',
			//	chunkFilename: 'scripts/[id].js',
			filename: '[name].js',
			//	publicPath: '/',
			//	publicPath: '',
		},
		//	stats: false,
		devServer: {
			historyApiFallback: true,
			//	stats: 'none',
			historyApiFallback: {
				rewrites: [
					{
						to: '/source.html',
					},
				],
			},
		},
		resolve: {
			alias: {
				'': p__path__join(__dirname, '..', 'source', 'scripts'),
			},
			extensions: [
				'.js',
			],
			modules: [
				p__path__join(__dirname, '..', 'node_modules'),
			],
		},
		plugins: [
			new p__webpack_stylish(),
			//	new webpack__optimize.CommonsChunkPlugin({
			//		children: true,
			//		filename: '[name].js',
			//		minChunks: Infinity,
			//		name: 'vendor',
			//	}),
			// new webpack__prefetch_plugin(p__path__join(__dirname, '..', 'source', 'assets'), './favicon.ico'),
			new webpack__prefetch_plugin(p__path__join(__dirname, '..', 'source', 'templates'), './index.pug'),
		],
	}
}
