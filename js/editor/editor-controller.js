'use strict'

function initEditor() {
    setGlobalVars()
    resizeCanvas()
    renderCanvas(gTextInput)
    window.addEventListener('resize', () => {
        resizeCanvas()
        renderCanvas()
    })
}

function renderCanvas(text = gMeme.lines[gMeme.selectedLineIdx].txt) {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    var imgId = getImgById(gMeme.selectedImgId).id
    const img = document.getElementById(`${imgId}`)
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    changeGMemeText(text)
    drawText()
}

function onClear() {
    clearCanvas()
}

function onSwitchLine() {
    switchLine()
    const currLine = getCurrLine()
    renderCanvas(currLine.txt)
}

function onLineUp() {
    lineUp()
    const currLine = getCurrLine()
    renderCanvas(currLine.txt)
}

function onLineDown() {
    lineDown()
    const currLine = getCurrLine()
    renderCanvas(currLine.txt)
}

function onDeleteLine() {
    deleteLine()
    const currLine = getCurrLine()
    renderCanvas(currLine.txt)
}

function onAdd() {
    addLine()
    const currLine = getCurrLine()
    renderCanvas(currLine.txt)
}

function onSmallerFont() {
    smallerFont()
    const currLine = getCurrLine()
    renderCanvas(currLine.txt)
}

function onBiggerFont() {
    biggerFont()
    const currLine = getCurrLine()
    renderCanvas(currLine.txt)
}

function onAlignLeft() {
    alignLeft()
    const currLine = getCurrLine()
    renderCanvas(currLine.txt)
}

function onAlignCenter() {
    alignCenter()
    const currLine = getCurrLine()
    renderCanvas(currLine.txt)
}

function onAlignRight() {
    alignRight()
    const currLine = getCurrLine()
    renderCanvas(currLine.txt)
}


function onUpdateColor(color) {
    updateColor(color)
    const currLine = getCurrLine()
    renderCanvas(currLine.txt)
}

function onDownload(url) {
    downloadCanvas(url)
}

function onShare() {
    uploadImg()
}

function onGalleryClick() {
    // gTextInput.value = ''
    document.querySelector('.gallery').style.display = 'block'
    document.querySelector('.editor').style.display = 'none'
    document.querySelector('.search-img').style.display = 'flex'
    renderGallery()
}

function onSave() {
    saveCanvas()
}

function onChangeFontStyle(font) {
    changeFontStyle(font)
    const currLine = getCurrLine()
    renderCanvas(currLine.txt)
}