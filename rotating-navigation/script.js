'use strict'

let home = document.querySelector(".home")
let bars = document.querySelector('.bars')
let cancel = document.querySelector('.cancel')
let menu = document.querySelector('.menu')

bars.addEventListener("click", function () {
    home.classList.toggle('rotate')
    // menu.classList.toggle('rotate')
    bars.classList.toggle('hide')
    cancel.classList.toggle('hide')
})
cancel.addEventListener("click", function () {
    home.classList.toggle('rotate')
    // menu.classList.toggle('rotate')
    bars.classList.toggle('hide')
    cancel.classList.toggle('hide')
})