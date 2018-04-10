'use strict';

var navigators = [].slice.call(document.querySelectorAll('[data-navigator]'));
var aboutLink = navigators[1];
var hash = window.location.hash.replace('#', '');
var pageContent = document.querySelector('main');

var navigateTo = function navigateTo(target) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : target.getAttribute('data-navigator');

  var tabTitle = title,
      currentTab = data[tabTitle];

  document.documentElement.style.setProperty('background-color', 'var(--' + tabTitle + '-border)');
  document.title = title.charAt(0).toUpperCase() + title.slice(1) + ' \xB7 Olaolu Olawuyi';
  document.body.style.setProperty('background-color', 'var(--' + tabTitle + '-bg)');

  document.body.className = document.body.className !== currentTab.name ? currentTab.name : document.body.className;

  pageContent.innerHTML = pageContent.innerHTML !== currentTab.content ? currentTab.content : pageContent.innerHTML;
  document.querySelector('meta[name="theme-color"]').setAttribute('content', getComputedStyle(document.documentElement).getPropertyValue('--' + tabTitle + '-bg'));

  if (!target.classList.contains('active')) {
    var activeLink = document.querySelector('.active');
    if (activeLink) activeLink.classList.remove('active');
    target.classList.add('active');
  }
};

var pages = ['home', 'about', 'contact'];

if (!pages.includes(hash) || !hash) navigators[0].className = 'active';
navigators.forEach(function (link) {
  return link.addEventListener('click', function (e) {
    return navigateTo(e.target);
  });
});

var restoreTab = function restoreTab() {
  pages.forEach(function (page, i) {
    if (hash === page) navigators[i].click();
  });
};

var favicons = [].slice.call(document.querySelectorAll('link[rel="icon"]'));
favicons.forEach(function (favicon) {
  favicon.href = /Android/i.test(navigator.userAgent) ? 'images/favicon-white.png' : favicon.href;
});

window.addEventListener('popstate', function () {
  var hash = location.hash.replace('#', '');
  if (hash) navigateTo(document.querySelector('[data-navigator=' + hash + ']'));else navigateTo(navigators[0]);
});

document.querySelector('header > a').addEventListener('click', function () {
  return navigators[0].click();
});
document.addEventListener('DOMContentLoaded', restoreTab);
//# sourceMappingURL=script.js.map
