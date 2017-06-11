import webpack_merge from 'webpack-merge'
//
import {
	join as path__join,
} from 'path'
//
import {
	DefinePlugin as webpack__define_plugin,
	optimize as webpack__optimize,
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
				common: [
					'./common',
					'./favicon.ico',
					'./index.pug',
				],
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
			],
			resolveLoader: {
				moduleExtensions: [
					'-loader',
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
				new webpack__define_plugin({
					'process.env.NODE_ENV': JSON.stringify('production'),
				}),
				new webpack__optimize.ModuleConcatenationPlugin(),
			],
		} : {},
	)
}
