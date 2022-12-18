'use strict'

const gElContainer = document.querySelector('.grid-container')
function onInit() {
    gKeywordSearchCountMap = _createKeyWordsMap()
    // renderClickKeysFilter()
    renderGallery()
}

function renderGallery() {

    const imgs = getImgs()
    var strHTMLs = ``
    imgs.forEach((img) => {
        strHTMLs += `<img class="cell" src="${img.url}" id=${img.id} onclick="onImgClick(this)">`
    });
    gElContainer.innerHTML = strHTMLs
}

function onImgClick(img) {
    setGmemeImgId(img.id)
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.editor').style.display = 'flex'
    initEditor()
    gTextInput.value = ''
    drawImg(img.src)
}

function renderSavedMemes() {
    document.querySelector('.editor').style.display = 'none'
    document.querySelector('.search-img').style.display = 'none'
    document.querySelector('.gallery').style.display = 'block'
    let strHTMLs = ''
    const savedMemes = loadFromStorage(STORAGE_MEMES_KEY)
    savedMemes.forEach(savedMeme => {
        strHTMLs += `
        <img class="cell" src="${savedMeme.url}" />`
    })
    gElContainer.innerHTML = strHTMLs
}

function renderFilteredImgs(searchWord) {
    if (!searchWord) {
        searchWord = null
        renderGallery()
    }
    let filteredImgs = getFilteredImgs(searchWord)
    var strHTMLs = ``
    filteredImgs.forEach((img) => {
        strHTMLs += `<img class="cell" src="${img.url}" id=${img.id} onclick="onImgClick(this)">`
    });
    gElContainer.innerHTML = strHTMLs
    document.getElementById(`${searchWord}`).classList.add('rotate')
    setTimeout(() => {
        document.getElementById(`${searchWord}`).classList.remove('rotate')
    }, 1500);
}

function toggleRotate(id) {
    document.getElementById(`${id}`).classList.add('rotate')
    setTimeout(() => {
        document.getElementById(`${id}`).classList.remove('rotate')
    }, 1500);
}