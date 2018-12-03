import webpack_dashboard_plugin from 'webpack-dashboard/plugin'
export default () => ({
	plugins: [
		new webpack_dashboard_plugin(),
	],
})
