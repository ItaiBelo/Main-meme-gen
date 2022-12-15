'use strict'


function initEditor() {
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
    // console.log(text);
    changeGMemeText(text)
    drawText()
}

// function renderText(canvas, textInput) {
//     const bgImg = getImgById(gMeme.selectedImgId)
//     console.log(bgImg)
//     gCtx.font = "20px sans-serif"
//     gCtx.textAlign = "center"
//     gCtx.fillStyle = "black"
//     var xPos = canvas.width / 2
//     var yPos = canvas.height / 6
//     textInput.addEventListener("input", function () {
//         gCtx.clearRect(0, 0, canvas.width, canvas.height)
//         var text = this.value
//         var img = new Image();
//         img.onload = function () {
//             gCtx.drawImage(img, 0, 0, canvas.width, canvas.height);
//             // drawImg(bgImg.url)
//             gCtx.fillText(text, xPos, yPos)
//             gMeme.lines
//         }
//         img.src = bgImg.url;
//     })
// }

















function onClear() {
    clearCanvas()
}

function onUp() {

}

function onDown() {

}

function onDelete() {

}

function onAdd() {
    console.log('ch')
    // drawText('text', 350, 150)
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