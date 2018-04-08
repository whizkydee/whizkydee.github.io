const navigators = [].slice.call(document.querySelectorAll('[data-navigator]'))
, aboutLink = navigators[1]
, hash = window.location.hash.replace('#', '')
, pageContent = document.querySelector('main')

const switchTabTo = (target,
  title = target.getAttribute('data-navigator')) => {
  let tabTitle = title
  , currentTab = data[tabTitle]

  document.documentElement.style.setProperty('background-color', `var(--${tabTitle}-border)`)
  document.body.style.setProperty('background-color', `var(--${tabTitle}-bg)`)
  pageContent.setAttribute('class', currentTab.name)

  if (pageContent.innerHTML !== currentTab.content)
    pageContent.innerHTML = currentTab.content

  document.querySelector('meta[name="theme-color"]')
    .setAttribute('content',
      getComputedStyle(document.documentElement).getPropertyValue(`--${tabTitle}-bg`))

  if (!target.classList.contains('active')) {
    let activeLink = document.querySelector('.active')
    if (activeLink) activeLink.classList.remove('active')
    target.classList.add('active')
  }
}

const pages = ['home', 'about', 'contact']
if (!pages.includes(hash) || !hash) navigators[0].className = 'active'
navigators.forEach(link =>
  link.addEventListener('click', e => switchTabTo(e.target))
)

const restoreTab = () => {
  pages.forEach((page, i) => {
    if (hash === page) navigators[i].click()
  })
}

document.querySelector('header > a')
  .addEventListener('click', () => navigators[0].click())
document.addEventListener('DOMContentLoaded', restoreTab)
