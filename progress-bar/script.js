'use strict'

let next = document.querySelector('.btn-next')
let prev = document.querySelector('.btn-prev')
let bar = document.querySelector('.bar')
let scroll = document.querySelector('.scroll')
let counter = 0
let inc = 33
let i = 1

prev.classList.add('disable')

next.addEventListener('click', function () {
    if (i >= 3) {
        next.classList.add('disable')
    } else {
        next.classList.remove('disable')
    }
    prev.classList.remove('disable')
    i += 1
    document.querySelector(`.span-${i}`).classList.add('next-bor')
    counter += inc
    scroll.style.width = `${counter}%`
    scroll.classList.add('next')
})
prev.addEventListener('click', function () {
    console.log(i);
    if (i <= 2) {
        prev.classList.add('disable')
        next.classList.remove('disable')
    } else {
        prev.classList.remove('disable')
    }
    document.querySelector(`.span-${i}`).classList.remove('next-bor')
    i -= 1
    counter -= inc
    scroll.style.width = `${counter}%`
    scroll.classList.add('prev')
})