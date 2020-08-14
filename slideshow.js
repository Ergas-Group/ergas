const slideSection = document.querySelector("section.s4")
const slideshow = document.querySelector(".slideshow")
const slideElement = slideshow.querySelectorAll("div")
const colour = ["#87977A", "#81829E", "#676767"]


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
  slideSection.style.backgroundColor = colour[currentSlide]
  slideElementSpan.style.backgroundColor = colour[currentSlide]
})
