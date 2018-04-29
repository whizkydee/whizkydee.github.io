'use strict';

var routeTo = function routeTo(target) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : target.getAttribute('data-navigator');

  var tabTitle = title,
      body = document.body,
      currentTab = data[tabTitle],
      main = document.querySelector('main');

  document.documentElement.style.setProperty('background-color', 'var(--' + tabTitle + '-border)');
  document.title = title.charAt(0).toUpperCase() + title.slice(1) + ' \xB7 Olaolu Olawuyi';
  body.style.setProperty('background-color', 'var(--' + tabTitle + '-bg)');

  body.className = body.className !== currentTab.name ? currentTab.name : body.className;
  main.className = main.className !== currentTab.name ? currentTab.name : main.className;

  main.innerHTML = main.innerHTML !== currentTab.content ? currentTab.content : main.innerHTML;
  document.querySelector('meta[name="theme-color"]').setAttribute('content', getComputedStyle(document.documentElement).getPropertyValue('--' + tabTitle + '-bg'));

  if (!target.classList.contains('active')) {
    var activeLink = document.querySelector('.active');
    if (activeLink) activeLink.classList.remove('active');
    target.classList.add('active');
  }
  positionSocialIcons();
};

var navigators = [].slice.call(document.querySelectorAll('[data-navigator]'));
var hash = window.location.hash.replace('#', ''),
    pages = ['home', 'about', 'contact'],
    aboutLink = navigators[1];

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

var updateFavicon = function updateFavicon() {
  var favicons = [].slice.call(document.querySelectorAll('link[rel="icon"]')),
      chromeOnAndroid = /Chrome/i.test(navigator.userAgent) && /Android/i.test(navigator.userAgent),
      portrait = screen.orientation.type.includes('portrait');

  favicons.forEach(function (favicon) {
    return favicon.href = chromeOnAndroid && portrait ? 'images/favicon-white.png' : favicon.href;
  });
};

var positionSocialIcons = function positionSocialIcons() {
  var bodyHeight = document.body.clientHeight,
      elemsHeight = document.querySelector('header').clientHeight + document.querySelector('main').clientHeight,
      availHeight = bodyHeight - elemsHeight,
      social = document.querySelector('aside');

  if (bodyHeight > elemsHeight) social.style.setProperty('margin-top', availHeight - 150 + 'px');
};

document.querySelector('header > a').addEventListener('click', function () {
  return navigators[0].click();
});

document.addEventListener('DOMContentLoaded', function () {
  restoreTab();
  updateFavicon();
  positionSocialIcons();
});

window.addEventListener('resize', function () {
  updateFavicon();
  positionSocialIcons();
});
//# sourceMappingURL=script.js.map
