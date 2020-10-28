

const navLinks = document.querySelectorAll("nav a")

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0.5) {

      sections.forEach((section, index) => {
        if (entry.target == section) {
          navLinks.forEach(link => {
            link.classList.remove("selected")
          })

          navLinks[index].classList.add("selected")
        }
      })

    }
  })
}, {
  threshold: [0, 0.5, 1]
})

sections.forEach(section => {
  navObserver.observe(section)
})
