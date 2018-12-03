//
import {
	join as p__path__join,
} from 'path'
//
export default () => {
	return {
		module: {
			rules: [
				{
					resource: {
						exclude: [
							p__path__join(__dirname, '..', 'node_modules'),
						],
						include: [
							p__path__join(__dirname, '..', 'source', 'scripts'),
						],
						test: [
							/\.js$/,
						],
					},
					use: [
						{
							loader: 'babel-loader',
							options: {
								babelrc: false,
								presets: [
									'@babel/preset-env',
								],
							},
						},
					],
				},
			],
		},
	}
}
