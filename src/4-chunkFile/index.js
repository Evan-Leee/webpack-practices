// function getComponent() {
// 	return import(/*webpackChunkName: "lodash"*/'lodash').then(_ => {
//     var element = document.createElement('div');

//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     return element;

//   }).catch(error => 'An error occurred while loading the component');
// }

async function getComponent() {
  var element = document.createElement('div');
  const _ = await import(/*webpackChunkName: "lodash"*/ 'lodash');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

getComponent().then(component => {
	document.body.appendChild(component);
})

//------------------------------------------------

function appendComponent() {
	require.ensure(['lodash'], function () {
		var element = document.createElement('div');
    	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
		document.body.appendChild(element);
	},'lodash');
}

appendComponent();

