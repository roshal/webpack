import html_webpack_plugin from 'html-webpack-plugin'
export default function () {
	return {
		plugins: [
			new html_webpack_plugin(),
		],
	}
}
