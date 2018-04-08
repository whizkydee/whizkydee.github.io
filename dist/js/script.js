'use strict';

var navigators = [].slice.call(document.querySelectorAll('[data-navigator]')),
    hash = window.location.hash.replace('#', ''),
    pageContent = document.querySelector('main');

var switchTabTo = function switchTabTo(title) {
  var tabTitle = title,
      currentTab = data[tabTitle];

  document.documentElement.style.setProperty('background-color', 'var(--' + tabTitle + '-border)');
  document.body.style.setProperty('background-color', 'var(--' + tabTitle + '-bg)');
  pageContent.setAttribute('class', currentTab.name);

  if (pageContent.innerHTML !== currentTab.content) pageContent.innerHTML = currentTab.content;

  document.querySelector('meta[name="theme-color"]').setAttribute('content', getComputedStyle(document.documentElement).getPropertyValue('--' + tabTitle + '-bg'));
};

navigators.forEach(function (link) {
  link.addEventListener('click', function (e) {
    return switchTabTo(e.target.getAttribute('data-navigator'));
  });
});

var restorePage = function restorePage() {
  ['home', 'about', 'contact'].forEach(function (page, i) {
    if (hash === page) switchTabTo(hash);
  });
};

document.querySelector('header > a').addEventListener('click', function () {
  return switchTabTo('home');
});

document.addEventListener('DOMContentLoaded', restorePage);
//# sourceMappingURL=script.js.map
