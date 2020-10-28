const bodyTag = document.querySelector("body")
const sections = document.querySelectorAll("section")
const headerTag = document.querySelector("header")

document.addEventListener("scroll", function() {
  const pixels = window.pageYOffset
  const pageHeight = bodyTag.getBoundingClientRect().height
  const totalScrollableDistance = pageHeight - window.innerHeight
  const percentage = pixels / totalScrollableDistance
  progressTag.style.width = `${100 * percentage}%`
})

document.addEventListener("scroll", function() {
  const pixels = window.pageYOffset

  sections.forEach(section => {
    if (section.offsetTop - 46 <= pixels) {

      if (section.hasAttribute("data-is-dark")) {
        headerTag.classList.add("white")
      } else {
        headerTag.classList.remove("white")
      }
    }
  })
})
