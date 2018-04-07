const navigators = document.querySelectorAll('[data-navigator]')
  , hash = window.location.hash.replace('#', '')
  , pageContent = document.querySelector('main')

const switchTabTo = (title) => {
  let tabTitle = title
  , currentTab = data[tabTitle]

  document.documentElement.style.setProperty('background-color', `var(--${tabTitle}-border)`)
  document.body.style.setProperty('background-color', `var(--${tabTitle}-bg)`)
  pageContent.setAttribute('class', currentTab.name)

  if (pageContent.innerHTML !== currentTab.content)
    pageContent.innerHTML = currentTab.content
}

navigators.forEach(link => {
  link.addEventListener('click', e =>
    switchTabTo(e.target.getAttribute('data-navigator'))
)})

const restorePage = () => {
  ['home', 'about', 'contact']
  .forEach((page, i) => {
    if (hash === page) switchTabTo(hash)
  })
}

document.querySelector('header > a')
  .addEventListener('click', () => switchTabTo('home'))

document.addEventListener('DOMContentLoaded', restorePage)
