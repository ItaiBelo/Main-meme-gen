'use strict'


function initEditor() {
    gElContainer = document.querySelector('.canvas-container')
    setGlobalVars()
    resizeCanvas()
    renderText(gElCanvas, gTextInput)
    window.addEventListener('resize', () => {
        resizeCanvas()
    })
}

function showEditor() {
    document.querySelector('.editor').style.display = 'flex'
    initEditor()
}

function renderText(text) {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    var imgId = getImgById(gMeme.selectedImgId).id
    console.log(imgId)
    const img = document.getElementById(`${imgId}`)
    console.log(img)
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    changeGMemeText(text)
    drawText()
}




function onClear() {
    clearCanvas()
}

function onSwitch() {
    gMeme.selectedLineIdx++
    console.log(gMeme.selectedLineIdx)
}

function onUp() {

}

function onDown() {

}

function onDeleteLine() {
    deleteLine()
}

function onAdd() {
    addLine()
}

function onSmallerFont() {

}

function onLeft() {

}

function onCenter() {

}

function onRight() {

}

function onFontColor() {
    setSpaceColor() //// adjust to text 
}

function onDownload() {
    downloadCanvas()
}

function onShare() {
    uploadImg()
}

