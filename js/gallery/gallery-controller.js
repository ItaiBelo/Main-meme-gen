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
        strHTMLs += `<img class="cell" src="${img.url}" onclick="onImgClick(this)">`
    });
    elContainer.innerHTML = strHTMLs
}

function onImgClick(img) {
    document.querySelector('.gallery').style.display = 'none'
    showEditor()
    drawImg(img.src)
}

function drawImg(file) {
    const elImg = new Image()
    elImg.src = file
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}