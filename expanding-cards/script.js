'use strict'

let imgs = document.querySelectorAll('.image')
// console.log(imgs);
imgs.forEach(img => {
    img.addEventListener('click', function (event) {
        imgs.forEach(i => {
            i.classList.remove('active')
        })
        event.target.classList.add('active')
    })
})