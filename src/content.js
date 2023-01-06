

class PageParser {

  constructor() {
    this.imgSrc = this.getDocumentTarget()
    this.current_img = 0

    this.addEventHandlers()
    this.addSaveButton()
  }

  getDocumentTarget(){
    return [...document.querySelectorAll('.swiper-wrapper>.swiper-slide>.swiper-zoom-container>img')]
      .map(el => (el.getAttribute('data-src') || el.getAttribute('src')).replace(/;(.)$/gmi, ';s=8000x4000'))
  }

  addEventHandlers(){
    document.querySelector('.swiper-button-next')
      .addEventListener('click', () => { 
        console.log(this.current_img, this.imgSrc.length)
        if(this.imgSrc.length > 1 && this.current_img < this.imgSrc.length-1) 
          this.current_img += 1 
      })

    document.querySelector('.swiper-button-prev')
      .addEventListener('click', () => { 
        console.log(this.current_img, this.imgSrc.length)
        if(this.current_img && this.imgSrc.length > 1) 
          this.current_img -= 1 
      })
  }

  addSaveButton(){
    const primal = document.querySelector('.gallery-open')
    const clone = primal.cloneNode(true)

    primal.parentNode.append(clone); primal.remove()
    clone.firstChild.setAttribute('src', 'https://cdn.icon-icons.com/icons2/72/PNG/256/download_arrow_14460.png')
    clone.firstChild.setAttribute('width', '50px')

    clone.addEventListener('click', () => {
      window.open(this.imgSrc[this.current_img], '_blank')
    })
  }
}


window.addEventListener('load', () => {
  const app = new PageParser()
})

