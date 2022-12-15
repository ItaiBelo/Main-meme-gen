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
        strHTMLs += `<img class="cell" src="${img.url}" id=${img.id} onclick="onImgClick(this)">`
    });
    elContainer.innerHTML = strHTMLs
}

function onImgClick(img) {
    setGmemeImgId(img.id)
    document.querySelector('.gallery').style.display = 'none'
    showEditor()
    drawImg(img.src)
}


