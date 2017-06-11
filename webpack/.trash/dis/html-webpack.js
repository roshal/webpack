import html_webpack_plugin from 'html-webpack-plugin'
export default () => ({
	plugins: [
		new html_webpack_plugin({
			// filename: 'index.html',
			template: 'index.pug',
		}),
	],
})
