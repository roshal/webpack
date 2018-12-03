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
							p__path__join(__dirname, '..', 'source', 'images'),
						],
						test: [
							/\.ico$/,
							/\.jpg$/,
							/\.png$/,
							/\.svg$/,
						],
					},
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								useRelativePath: true,
							},
						},
					],
				},
			],
		},
	}
}
