'use strict';

// INFO: see https://olaolu.me/src/js/script.js for the real sauce.
var body = document.body;
var docElem = document.documentElement;

var routeTo = function routeTo(target) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : target.getAttribute('data-navigator');

  var tabTitle = title;
  var currentTab = data[tabTitle];
  var main = document.querySelector('main');

  docElem.style.setProperty('background-color', 'var(--' + tabTitle + '-border)');
  document.title = title.charAt(0).toUpperCase() + title.slice(1) + ' \xB7 Olaolu Olawuyi';
  body.style.setProperty('background-color', 'var(--' + tabTitle + '-bg)');

  body.className = body.className !== currentTab.tabId ? currentTab.tabId : body.className;
  main.className = main.className !== currentTab.tabId ? currentTab.tabId : main.className;

  main.innerHTML = main.innerHTML !== currentTab.content ? currentTab.content : main.innerHTML;

  document.querySelector('meta[name="theme-color"]').setAttribute('content', getComputedStyle(docElem).getPropertyValue('--' + tabTitle + '-bg'));

  if (!target.classList.contains('active')) {
    var activeLink = document.querySelector('.active');
    if (activeLink) activeLink.classList.remove('active');
    target.classList.add('active');
  }
  positionSocialIcons();
};

var navigators = [].slice.call(document.querySelectorAll('[data-navigator]'));
var hash = location.hash.replace('#', '');
var pages = ['home', 'about', 'contact'];
var aboutLink = navigators[1];

if (!pages.includes(hash) || !hash) navigators[0].className = 'active';

navigators.forEach(function (link) {
  return link.addEventListener('click', function (e) {
    return routeTo(e.target);
  });
});

var restoreTab = function restoreTab() {
  pages.forEach(function (page, i) {
    if (hash === page) navigators[i].click();
  });
};

window.addEventListener('hashchange', function () {
  var hash = location.hash.replace('#', '');
  if (hash) routeTo(document.querySelector('[data-navigator=' + hash + ']'));else routeTo(navigators[0]);
});

var positionSocialIcons = function positionSocialIcons() {
  var elemsHeight = document.querySelector('header').clientHeight + document.querySelector('main').clientHeight;
  var bodyHeight = document.body.clientHeight;
  var availHeight = bodyHeight - elemsHeight;
  var social = document.querySelector('aside');

  if (bodyHeight > elemsHeight) {
    social.style.marginTop = window.matchMedia('(orientation: portrait)').matches ? availHeight - 130 + 'px' : availHeight - 70 + 'px';
  }
};

document.querySelector('header > a').addEventListener('click', function () {
  return navigators[0].click();
});

document.addEventListener('DOMContentLoaded', function () {
  restoreTab();
  positionSocialIcons();
  document.body.style.setProperty('transition', 'background-color 1s ease .1s');
  docElem.style.setProperty('transition', 'background-color .3s ease');
});

window.addEventListener('resize', positionSocialIcons);
//# sourceMappingURL=script.js.map
