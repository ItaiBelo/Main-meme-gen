'use strict'

function onInit() {
    renderGallery()
}

function renderGallery() {
    // debugger
    // console.log('hey')
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
    document.querySelector('.editor').style.display = 'flex'
    initEditor()
    drawImg(img.src)
}

function renderSavedMemes() {
    document.querySelector('.editor').style.display = 'none'
    document.querySelector('.gallery').style.display = 'block'
    let strHTMLs = ''
    const elContainer = document.querySelector('.grid-container')
    const savedMemes = loadFromStorage(STORAGE_MEMES_KEY)
    savedMemes.forEach(savedMeme => {
        strHTMLs += `
        <img class="cell" src="${savedMeme.url}" />`
    })
    elContainer.innerHTML = strHTMLs
}


function renderFilteredImgs(searchWord) {
    // console.log(searchWord)
    if (!searchWord) {
        searchWord = null
        renderGallery()
    }
    let filteredImgs = gImgs.filter(img => img.keywords.includes(searchWord.toLowerCase()))
    const elContainer = document.querySelector('.grid-container')
    var strHTMLs = ``
    filteredImgs.forEach((img) => {
        strHTMLs += `<img class="cell" src="${img.url}" id=${img.id} onclick="onImgClick(this)">`
    });
    elContainer.innerHTML = strHTMLs
}
