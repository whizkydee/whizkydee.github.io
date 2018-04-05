const navigators = document.querySelectorAll('[data-navigator]')

const tabChange = (e) => {
  e.preventDefault()
  let activeText = e.target.textContent

  document.body.style.setProperty('background-color', `var(--${activeText}-bg)`)
  document.body.style.setProperty('border-color', `var(--${activeText}-border)`)

  document.querySelector('main').innerHTML = data[activeText].content
  let styleElem = document.createElement('style')
  styleElem.type = 'text/css'
  styleElem.textContent = data[activeText].style

  document.body.appendChild(styleElem)
}

navigators.forEach(link => {

  link.addEventListener('click', tabChange)

})
