import _ from 'lodash';
import black from './black-list/black.jsx';
import white from './white-list/white.jsx';
import './style.css';

function initialStatement(){
	var div = document.createElement('div');
	div.innerHTML = _.join(['hello', 'webpack', '!'], ' ');
	return div;
}

document.body.appendChild(initialStatement());

