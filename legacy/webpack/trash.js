import path from 'path'
export default function (paths) {
	return {
		entry: {
			common: path.join(paths.source, 'entry.js'),
			common: path.join(paths.source, 'qwe.pug'),
		},
		output: {
			path: paths.output,
			filename: 'common.js',
		},
	}
}
