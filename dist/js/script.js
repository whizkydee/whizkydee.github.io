'use strict';

var navigators = document.querySelectorAll('[data-navigator]');

var tabChange = function tabChange(e) {
  e.preventDefault();
  var activeText = e.target.textContent;

  document.body.style.setProperty('background-color', 'var(--' + activeText + '-bg)');
  document.body.style.setProperty('border-color', 'var(--' + activeText + '-border)');

  document.querySelector('main').innerHTML = data[activeText].content;
  var styleElem = document.createElement('style');
  styleElem.type = 'text/css';
  styleElem.textContent = data[activeText].style;

  document.body.appendChild(styleElem);
};

navigators.forEach(function (link) {

  link.addEventListener('click', tabChange);
});
//# sourceMappingURL=script.js.map
