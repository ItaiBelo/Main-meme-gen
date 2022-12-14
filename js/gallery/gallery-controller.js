'use strict'

function onInit() {
    renderGallery()
}

function renderGallery() {
    // debugger
    const imgs = getImgs()
    const elContainer = document.querySelector('.grid-container')
    var strHTMLs = ``
    imgs.forEach((img) => {
        strHTMLs += `<img class="cell" src="${img.url}" onclick="drawCanvasImg(this)">`
    });
    elContainer.innerHTML = strHTMLs
}