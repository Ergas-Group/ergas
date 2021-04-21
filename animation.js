
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0.2) {
      entry.target.classList.add("fade")
    } else {
      entry.target.classList.remove("fade")
    }
  })
}, {
  threshold: [0, 0.2, 0.8, 1]
})

const videos = document.querySelectorAll('video');
videos.forEach(video => {
  observer.observe(video)
})
