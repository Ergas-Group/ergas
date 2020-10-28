const slideSection = document.querySelector("section.s3")
const slideElement = slideSection.querySelectorAll("div")


//defining which slide we are on
let currentSlide = 0
let z = 1

const next = function() {
  currentSlide = currentSlide + 1

  if (currentSlide > slideElement.length - 1)
  { currentSlide = 0 }
}

slideSection.addEventListener("click", function() {
  next()
  z = z + 1

  slideElement[currentSlide].style.zIndex = z
})
