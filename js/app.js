const links = document.querySelector('.links')
const sections = document.querySelectorAll('.section')

sections.forEach((section) => {
  const name = section.id.replace('-', ' ')
  links.innerHTML += `<li class="link"><a href="#${section.id}">${name}</a></li>`
})

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('highlighted')
      else entry.target.classList.remove('highlighted')
    })
  },
  { threshold: 0.5 }
)

sections.forEach((section) => observer.observe(section))
