const navigators = [].slice.call(document.querySelectorAll('[data-navigator]'))
const aboutLink = navigators[1]
const hash = window.location.hash.replace('#', '')
const pageContent = document.querySelector('main')
const body = document.body

const routeTo = (target,
  title = target.getAttribute('data-navigator')) => {
  let tabTitle = title
  , currentTab = data[tabTitle]

  document.documentElement.style.setProperty('background-color', `var(--${tabTitle}-border)`)
  document.title = `${title.charAt(0).toUpperCase() + title.slice(1)} · Olaolu Olawuyi`
  body.style.setProperty('background-color', `var(--${tabTitle}-bg)`)

  body.className = (body.className !== currentTab.name) ? currentTab.name : body.className
  pageContent.className = (pageContent.className !== currentTab.name)
    ? currentTab.name : pageContent.className

  pageContent.innerHTML = pageContent.innerHTML !== currentTab.content
    ? currentTab.content : pageContent.innerHTML
  document.querySelector('meta[name="theme-color"]').setAttribute('content',
    getComputedStyle(document.documentElement).getPropertyValue(`--${tabTitle}-bg`))

  if (!target.classList.contains('active')) {
    let activeLink = document.querySelector('.active')
    if (activeLink) activeLink.classList.remove('active')
    target.classList.add('active')
  }
  positionSocialIcons()
}

const pages = ['home', 'about', 'contact']

if (!pages.includes(hash) || !hash) navigators[0].className = 'active'
navigators.forEach(link =>
  link.addEventListener('click', e => routeTo(e.target))
)

const restoreTab = () => {
  pages.forEach((page, i) => {
    if (hash === page) navigators[i].click()
  })
}

const favicons = [].slice.call(document.querySelectorAll('link[rel="icon"]'))
favicons.forEach(favicon =>
  favicon.href = (/Android/i.test(navigator.userAgent)) ? 'images/favicon-white.png' : favicon.href
)

window.addEventListener('popstate', () => {
  const hash = location.hash.replace('#', '')
  if (hash) routeTo(document.querySelector(`[data-navigator=${hash}]`))
  else routeTo(navigators[0])
})

const positionSocialIcons = () => {
  let bodyHeight = document.body.clientHeight
  let elemsHeight = document.querySelector('header').clientHeight
    + document.querySelector('main').clientHeight
  let availHeight = bodyHeight - elemsHeight
  let social = document.querySelector('aside')

  if (bodyHeight > elemsHeight)
    social.style.setProperty('margin-top', `${availHeight - 100}px`)
}

document.querySelector('header > a')
  .addEventListener('click', () => navigators[0].click())

document.addEventListener('DOMContentLoaded', restoreTab)
document.addEventListener('DOMContentLoaded', positionSocialIcons)
window.addEventListener('resize', positionSocialIcons)
