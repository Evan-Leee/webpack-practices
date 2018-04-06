import _ from 'lodash';
// import showText from './show';
// showText('Hello webpack!');

var div = document.createElement('div');
div.innerHTML = _.join(['hello', 'webpack', '!'], ' ');
document.body.appendChild(div);
