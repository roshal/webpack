import webpack_merge from 'webpack-merge'
//
import {
	join as path__join,
} from 'path'
//
import {
	EnvironmentPlugin as webpack__environment_plugin,
	optimize as webpack__optimize,
	PrefetchPlugin as webpack__prefetch_plugin,
} from 'webpack'
//
export default (env) => {
	const configuration = (name) => {
		const path = './webpack/' + name
		return require(path).default(env)
	}
	return webpack_merge(
		{
			context: path__join(__dirname, 'source'),
			entry: {
				common: './common',
			},
			output: {
				filename: '[name].js',
				chunkFilename: 'scripts/[name].js',
			},
			plugins: [
				new webpack__optimize.CommonsChunkPlugin({
					children: true,
					filename: '[name].js',
					minChunks: Infinity,
					name: 'vendor',
				}),
				new webpack__prefetch_plugin(path__join(__dirname, '..', 'source'), './favicon.ico'),
				new webpack__prefetch_plugin(path__join(__dirname, '..', 'source'), './index.pug'),
			],
			resolveLoader: {
				moduleExtensions: [
					'-' + 'loader',
				],
			},
		},
		configuration('images'),
		configuration('scripts'),
		configuration('styles'),
		configuration('templates'),
		env.develop ? {
			devServer: {
				port: 80,
			},
			devtool: 'cheap-module-source-map',
			output: {
				path: path__join(__dirname, 'output'),
			},
		} : {},
		env.produce ? {
			devServer: {
				compress: true,
				https: true,
				port: 443,
			},
			output: {
				path: path__join(__dirname, 'public'),
			},
			plugins: [
				new webpack__environment_plugin({
					NODE_ENV: 'production',
				}),
				new webpack__optimize.ModuleConcatenationPlugin(),
			],
		} : {},
	)
}
