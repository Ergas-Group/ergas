

        const bodyTag = document.querySelector("body")
        const sections = document.querySelectorAll("section")
        const clientTag = document.querySelector("div.client")
        const pageTag = document.querySelector("div.page")
        const headerTag = document.querySelector("header")

        const scrollprompt = document.querySelector(".scrollprompt")

        document.addEventListener("scroll", function () {
          const pixels = window.pageYOffset
          const pageHeight = bodyTag.getBoundingClientRect().height
          const totalScrollableDistance = pageHeight - window.innerHeight

          const percentage = pixels / totalScrollableDistance

          progressTag.style.width = `${100 * percentage}%`
        })


        document.addEventListener("scroll", function () {
          const pixels = window.pageYOffset

          sections.forEach(section => {
            if (section.offsetTop - 80 <= pixels) {
              clientTag.innerHTML = section.getAttribute("data-client")
              pageTag.innerHTML = section.getAttribute("data-page")

              if (section.hasAttribute("data-is-dark")) {
                headerTag.classList.add("white")

              } else {
                headerTag.classList.remove("white")
                
              }
            }
          })
        })


        const togglescrollprompt = function () {
          const pixels = window.pageYOffset

          if (pixels > 90) {
            scrollprompt.classList.add("scrolled")
          }
        }

        togglescrollprompt()

        document.addEventListener("scroll", function () {
          togglescrollprompt()
        })


// data-is-dark="yes"
