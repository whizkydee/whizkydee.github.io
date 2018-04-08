'use strict';

var navigators = [].slice.call(document.querySelectorAll('[data-navigator]')),
    aboutLink = navigators[1],
    hash = window.location.hash.replace('#', ''),
    pageContent = document.querySelector('main');

var switchTabTo = function switchTabTo(target) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : target.getAttribute('data-navigator');

  var tabTitle = title,
      currentTab = data[tabTitle];

  document.documentElement.style.setProperty('background-color', 'var(--' + tabTitle + '-border)');
  document.body.style.setProperty('background-color', 'var(--' + tabTitle + '-bg)');
  pageContent.setAttribute('class', currentTab.name);

  if (pageContent.innerHTML !== currentTab.content) pageContent.innerHTML = currentTab.content;

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
    return switchTabTo(e.target);
  });
});

var restoreTab = function restoreTab() {
  pages.forEach(function (page, i) {
    if (hash === page) navigators[i].click();
  });
};

document.querySelector('header > a').addEventListener('click', function () {
  return navigators[0].click();
});
document.addEventListener('DOMContentLoaded', restoreTab);
//# sourceMappingURL=script.js.map
