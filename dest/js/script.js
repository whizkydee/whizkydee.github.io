'use strict';

var navigators = [].slice.call(document.querySelectorAll('[data-navigator]'));
var aboutLink = navigators[1];
var hash = window.location.hash.replace('#', '');
var pageContent = document.querySelector('main');
var body = document.body;

var routeTo = function routeTo(target) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : target.getAttribute('data-navigator');

  var tabTitle = title,
      currentTab = data[tabTitle];

  document.documentElement.style.setProperty('background-color', 'var(--' + tabTitle + '-border)');
  document.title = title.charAt(0).toUpperCase() + title.slice(1) + ' \xB7 Olaolu Olawuyi';
  body.style.setProperty('background-color', 'var(--' + tabTitle + '-bg)');

  body.className = body.className !== currentTab.name ? currentTab.name : body.className;
  pageContent.className = pageContent.className !== currentTab.name ? currentTab.name : pageContent.className;

  pageContent.innerHTML = pageContent.innerHTML !== currentTab.content ? currentTab.content : pageContent.innerHTML;
  document.querySelector('meta[name="theme-color"]').setAttribute('content', getComputedStyle(document.documentElement).getPropertyValue('--' + tabTitle + '-bg'));

  if (!target.classList.contains('active')) {
    var activeLink = document.querySelector('.active');
    if (activeLink) activeLink.classList.remove('active');
    target.classList.add('active');
  }
  positionSocialIcons();
};

var pages = ['home', 'about', 'contact'];

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

var favicons = [].slice.call(document.querySelectorAll('link[rel="icon"]'));
favicons.forEach(function (favicon) {
  return favicon.href = /Android/i.test(navigator.userAgent) ? 'images/favicon-white.png' : favicon.href;
});

window.addEventListener('popstate', function () {
  var hash = location.hash.replace('#', '');
  if (hash) routeTo(document.querySelector('[data-navigator=' + hash + ']'));else routeTo(navigators[0]);
});

var positionSocialIcons = function positionSocialIcons() {
  var bodyHeight = document.body.clientHeight;
  var elemsHeight = document.querySelector('header').clientHeight + document.querySelector('main').clientHeight;
  var availHeight = bodyHeight - elemsHeight;
  var social = document.querySelector('aside');

  if (bodyHeight > elemsHeight) social.style.setProperty('margin-top', availHeight - 100 + 'px');
};

document.querySelector('header > a').addEventListener('click', function () {
  return navigators[0].click();
});

document.addEventListener('DOMContentLoaded', restoreTab);
document.addEventListener('DOMContentLoaded', positionSocialIcons);
window.addEventListener('resize', positionSocialIcons);
//# sourceMappingURL=script.js.map
