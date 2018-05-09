const routeTo = (target, title = target.getAttribute('data-navigator')) => {
  let tabTitle = title
  , body = document.body
  , currentTab = data[tabTitle]
  , main = document.querySelector('main')

  document.documentElement.style.setProperty('background-color', `var(--${tabTitle}-border)`)
  document.title = `${title.charAt(0).toUpperCase() + title.slice(1)} · Olaolu Olawuyi`
  body.style.setProperty('background-color', `var(--${tabTitle}-bg)`)

  body.className = body.className !== currentTab['tabId']? currentTab['tabId']: body.className
  main.className = main.className !== currentTab['tabId']? currentTab['tabId']: main.className

  main.innerHTML = main.innerHTML !== currentTab.content? currentTab.content: main.innerHTML
  document.querySelector('meta[name="theme-color"]').setAttribute('content',
    getComputedStyle(document.documentElement).getPropertyValue(`--${tabTitle}-bg`))

  if (!target.classList.contains('active')) {
    let activeLink = document.querySelector('.active')
    if (activeLink) activeLink.classList.remove('active')
    target.classList.add('active')
  }
  positionSocialIcons()
}

const navigators = document.querySelectorAll('[data-navigator]')
const hash = location.hash.replace('#', '')
, pages = ['home', 'about', 'contact']
, aboutLink = navigators[1]

if (!pages.includes(hash) || !hash) navigators[0].className = 'active'

navigators.forEach(link =>
  link.addEventListener('click', e => routeTo(e.target))
)

const restoreTab = () => {
  pages.forEach((page, i) => {
    if (hash === page) navigators[i].click()
  })
}

window.addEventListener('hashchange', () => {
  const hash = location.hash.replace('#', '')
  if (hash) routeTo(document.querySelector(`[data-navigator=${hash}]`))
  else routeTo(navigators[0])
})

const updateFavicon = () => {
  const favicons = document.querySelectorAll('link[rel="icon"]')
  , chromeOnAndroid = /Android/i.test(navigator.userAgent)
                    && /Chrome/i.test(navigator.userAgent)
  , portrait = screen.orientation.type.includes('portrait')

  favicons.forEach(favicon =>
    favicon.href = (chromeOnAndroid && portrait)? 'images/favicon-white.png': favicon.href
  )
}

const positionSocialIcons = () => {
  let elemsHeight = document.querySelector('header').clientHeight
                  + document.querySelector('main').clientHeight
  , bodyHeight = document.body.clientHeight
  , availHeight = bodyHeight - elemsHeight
  , social = document.querySelector('aside')

  if (bodyHeight > elemsHeight)
    social.style.setProperty('margin-top', `${availHeight - 100}px`)
}

document.querySelector('header > a')
  .addEventListener('click', () => navigators[0].click())

document.addEventListener(
  'DOMContentLoaded', () => {
    restoreTab()
    updateFavicon()
    positionSocialIcons()
    document.body.style.setProperty('transition', 'background-color 1s ease .1s')
    document.documentElement.style.setProperty('transition', 'background-color .3s ease')
})

window.addEventListener('resize', () => {
  updateFavicon()
  positionSocialIcons()
})
