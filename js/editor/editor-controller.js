'use strict'

function initEditor() {
    setGlobalVars()
    resizeCanvas()
    renderCanvas(gElCanvas, gTextInput)
    window.addEventListener('resize', () => {
        resizeCanvas()
    })
}

function renderCanvas(text) {
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

function onSwitch() {
    let lines = getLine()
    const currLine = lines[gMeme.selectedLineIdx]
    const previousLine = lines[gMeme.selectedLineIdx - 1]
    const lastLine = lines[lines.length - 1]

    if (!gMeme.selectedLineIdx) {
        gMeme.selectedLineIdx += (lines.length) - 1
        gTextInput.value = lastLine.txt
        return
    }
    gTextInput.value = previousLine.txt
    gMeme.selectedLineIdx--
}

function onLineUp() {
    lineUp()
}

function onLineDown() {
    lineDown()
}

function onDeleteLine() {
    deleteLine()
}

function onAdd() {
    addLine()
}

function onSmallerFont() {
    smallerFont()
}

function onBiggerFont() {
    biggerFont()
}

function onAlignLeft() {
    alignLeft()
}

function onAlignCenter() {
    alignCenter()
}

function onAlignRight() {
    alignRight()
}

function onFontColor() {
    var colorPicker = document.querySelector('.space-color')
    colorPicker.click();
    setSpaceColor()
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
}