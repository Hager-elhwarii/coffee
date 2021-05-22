const links = document.querySelector('.links')
const sections = document.querySelectorAll('.section')

// build nav links dynamically
sections.forEach((section) => {

  const name = section.id.replace('-', ' ')
  links.innerHTML += `<li class="link"><a href="#${section.id}">${name}</a></li>`
})

// highlight active section
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('highlighted')
      else entry.target.classList.remove('highlighted')
    })
  },
  { threshold: 0.5 }
)

// nav links scroll behavior
document.querySelectorAll('.link').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    document.querySelector(event.target.hash).scrollIntoView({ behavior: 'smooth' })
  })
})
