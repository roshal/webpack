//
// import '/../styles/source.sass'
//
import lodash from 'lodash'
//
import load from '/modules/load'
//
const component = (() => {
	const div = document.createElement('div')
	const p = document.createElement('p')
	div.appendChild(p)
	p.innerHTML = lodash.join(['hello', 'webpack'], ' ')
	return div
})()
load(document, () => {
	document.body.appendChild(component)
})
