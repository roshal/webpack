import './common.sass'
//
import lodash from 'lodash'
//
import {
	onReady as functions__on_ready,
} from './scripts/modules/functions'
//
const component = (() => {
	const div = document.createElement('div')
	const p = document.createElement('p')
	div.appendChild(p)
	p.innerHTML = lodash.join(['hello', 'webpack'], ' ')
	return div
})()
functions__on_ready(document, () => {
	document.body.appendChild(component)
})